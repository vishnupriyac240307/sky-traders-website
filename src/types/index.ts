export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  specs: { label: string; value: string }[];
  packaging: string;
  availability: string;
}

export interface TradingStep {
  step: string;
  title: string;
  description: string;
  iconName: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  iconName: string;
}

export interface FormData {
  fullName: string;
  phone: string;
  product: string;
  quantity: string;
  destination: string;
  message: string;
}

export interface FormErrors {
  fullName?: string;
  phone?: string;
  product?: string;
  quantity?: string;
  destination?: string;
}
