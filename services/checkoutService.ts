// Plan details type
export interface PlanDetails {
  name: string;           // "Basic" | "Pro"
  amountKobo: number;     // amount in kobo for Paystack
  amountNaira: number;    // amount in Naira for display
  annualSavings?: number; // only for annual cycle
  monthlyEquivalent?: number; // only for annual cycle
  features: string[];     // feature list for order summary
}

// Pricing reference
const PRICING = {
  basic: {
    monthly: { naira: 10000, kobo: 1000000 },
    annual: { naira: 100000, kobo: 10000000, savings: 20000 },
  },
  pro: {
    monthly: { naira: 20000, kobo: 2000000 },
    annual: { naira: 200000, kobo: 20000000, savings: 40000 },
  }
};

const FEATURES = {
  basic: [
    '1 branch support',
    'Up to 5 users',
    'Basic inventory management',
    'POS & billing',
    'AI Consult Assistant',
    'Email support',
    'Daily backups',
  ],
  pro: [
    'Up to 3 branches',
    'Up to 15 users',
    'Advanced inventory & expiry tracking',
    'Real-time analytics dashboard',
    'AI Consult Assistant (Advanced)',
    'Role-based access control',
    'Priority support',
    'Audit logs',
  ]
};

// Returns plan details based on plan slug and cycle
export function getPlanDetails(plan: string, cycle: string): PlanDetails | null {
  const planSlug = plan.toLowerCase() as keyof typeof PRICING;
  const cycleSlug = cycle.toLowerCase() as 'monthly' | 'annual';

  if (!PRICING[planSlug] || !PRICING[planSlug][cycleSlug]) {
    return null;
  }

  const pricing = PRICING[planSlug][cycleSlug];
  const features = FEATURES[planSlug];

  const details: PlanDetails = {
    name: planSlug === 'basic' ? 'Basic' : 'Pro',
    amountKobo: pricing.kobo,
    amountNaira: pricing.naira,
    features,
  };

  if (cycleSlug === 'annual') {
    details.annualSavings = (pricing as any).savings;
    details.monthlyEquivalent = Math.round(pricing.naira / 12);
  }

  return details;
}

// Calls the PharmaCore generate-access-token Edge Function
export async function callGenerateAccessToken(payload: {
  paystack_reference: string;
  plan: string;
  billing_cycle: string;
  buyer_email: string;
  buyer_phone: string;
  buyer_name: string;
  pharmacy_name: string;
}): Promise<{ success: boolean; token: string; code: string; expires_at: string; email_sent: boolean }> {
  const url = (import.meta as any).env.VITE_PHARMACORE_EDGE_FUNCTION_URL;

  if (!url) {
    throw new Error('Edge Function URL not configured');
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Server error: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.success === false) {
      throw new Error(data.message || 'Operation failed');
    }

    return data;
  } catch (error) {
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      throw new Error('Network error — please check your connection and try again');
    }
    throw error;
  }
}

// Normalises Nigerian phone numbers for display
// Converts +234XXXXXXXXXX to 0XXXXXXXXXX
export function formatPhoneNumber(phone: string): string {
  if (phone.startsWith('+234')) {
    return '0' + phone.slice(4);
  }
  return phone;
}

// Validates Nigerian phone number format
export function validateNigerianPhone(phone: string): boolean {
  // Strip spaces, dashes, and parentheses
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  
  // Accepts 08XXXXXXXXX, 07XXXXXXXXX, 09XXXXXXXXX (11 digits)
  // Or +234XXXXXXXXXX (13 chars starting with +234 followed by 10 digits)
  const pattern = /^(0[789]\d{9}|\+234[789]\d{9})$/;
  return pattern.test(cleaned);
}
