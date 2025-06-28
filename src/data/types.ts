
export interface CustomerInfo {
    email: string;
    id: string;
    name: string;
    phoneNumber: string;
  }
  
export interface ServiceSubject {
    id: string;
    name: string;
    notes: string;
    photoIds: string[];
  }
  
export interface PredefinedServicePart {
    id: string;
    name: string;
    price: number;
    amount: number;
  }
  
export interface PredefinedService {
    id: string;
    name: string;
    price: number;
  }
  
export interface Label {
    id: string;
    name: string;
    color: string;
  }
  
export interface Mechanic {
    id: string;
    name: string;
    email: string;
  }
  
export interface Visit {
    id: string;
    customerName: string;
    serviceObject: string;
    phoneNumber: string;
    email: string;
    intakeDate: string;
    releaseDate: string;
    status: string;
    mechanic: string;
    services: Array<{ name: string; price: number }>;
    parts: Array<{ name: string; price: number }>;
    notes: string;
    recommendations?: string;
    totalCost: number;
    smsSent?: {
      confirmation?: {
        date: string;
        message: string;
      }
    };
  }

     