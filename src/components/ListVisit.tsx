
import type { Visit } from '../data/types'

const mockVisits: Visit[] = [
  {
    id: "1",
    customerName: "John Smith",
    serviceObject: "2019 Honda Civic",
    phoneNumber: "555-0123",
    email: "john.smith@email.com",
    intakeDate: "2024-01-15",
    releaseDate: "2024-01-17",
    status: "Completed",
    mechanic: "Mike Johnson",
    services: [
      { name: "Oil Change", price: 45.00 },
      { name: "Brake Inspection", price: 25.00 },
      { name: "Tire Rotation", price: 30.00 }
    ],
    parts: [
      { name: "Oil Filter", price: 12.99 },
      { name: "Motor Oil (5qt)", price: 28.99 },
      { name: "Air Filter", price: 15.99 }
    ],
    notes: "Customer reported strange noise from brakes. Inspected and found normal wear. All systems functioning properly.",
    recommendations: "Recommend brake pad replacement in next 6 months. Check tire pressure monthly.",
    totalCost: 157.97,
    smsSent: {
      confirmation: {
        date: "2024-01-17",
        message: "Your Honda Civic is ready for pickup! Total: $157.97"
      }
    }
  },
  {
    id: "2", 
    customerName: "Sarah Davis",
    serviceObject: "2021 Toyota Camry",
    phoneNumber: "555-0456",
    email: "sarah.davis@email.com",
    intakeDate: "2024-01-20",
    releaseDate: "",
    status: "In Progress",
    mechanic: "Alex Rodriguez",
    services: [
      { name: "Transmission Service", price: 150.00 },
      { name: "Engine Diagnostic", price: 85.00 }
    ],
    parts: [
      { name: "Transmission Filter", price: 45.00 },
      { name: "ATF Fluid", price: 35.00 }
    ],
    notes: "Customer experiencing rough shifting. Diagnosed transmission fluid needs replacement. Engine diagnostic shows no issues.",
    recommendations: "Follow up in 3 months for transmission performance check.",
    totalCost: 315.00
  },
  {
    id: "3",
    customerName: "Michael Brown",
    serviceObject: "2018 Ford F-150",
    phoneNumber: "555-0789",
    email: "mike.brown@email.com",
    intakeDate: "2024-01-22",
    releaseDate: "2024-01-23",
    status: "Completed",
    mechanic: "Jessica Wilson",
    services: [
      { name: "Battery Replacement", price: 120.00 },
      { name: "Electrical System Check", price: 65.00 }
    ],
    parts: [
      { name: "Car Battery", price: 89.99 },
      { name: "Battery Terminals", price: 12.99 }
    ],
    notes: "Battery was completely dead. Replaced with new battery and cleaned terminals.",
    totalCost: 287.98,
    smsSent: {
      confirmation: {
        date: "2024-01-23",
        message: "Your Ford F-150 is ready! New battery installed."
      }
    }
  },
  {
    id: "4",
    customerName: "Emily Wilson",
    serviceObject: "2020 Nissan Altima",
    phoneNumber: "555-0321",
    email: "emily.wilson@email.com",
    intakeDate: "2024-01-25",
    releaseDate: "",
    status: "Pending",
    mechanic: "David Chen",
    services: [
      { name: "Brake Pad Replacement", price: 180.00 }
    ],
    parts: [
      { name: "Front Brake Pads", price: 65.00 },
      { name: "Rear Brake Pads", price: 55.00 }
    ],
    notes: "Waiting for parts to arrive. Customer approved estimate.",
    recommendations: "Replace brake fluid during service.",
    totalCost: 300.00
  },
  {
    id: "5",
    customerName: "Robert Taylor",
    serviceObject: "2017 Chevrolet Malibu",
    phoneNumber: "555-0654",
    email: "robert.taylor@email.com",
    intakeDate: "2024-01-18",
    releaseDate: "2024-01-19",
    status: "Completed",
    mechanic: "Mike Johnson",
    services: [
      { name: "AC Repair", price: 250.00 },
      { name: "Cooling System Flush", price: 95.00 }
    ],
    parts: [
      { name: "AC Compressor", price: 180.00 },
      { name: "Coolant", price: 25.00 }
    ],
    notes: "AC was not cooling properly. Replaced compressor and performed cooling system maintenance.",
    totalCost: 550.00
  }
];

interface ListVisitProps {
  visits?: Visit[];
}

export function ListVisit({ visits = mockVisits }: ListVisitProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return 'Not set';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'in progress':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'pending':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'cancelled':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  if (!visits || visits.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>No visits found</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1.5rem' }}>
      <h2 style={{ 
        fontSize: '1.875rem', 
        fontWeight: 'bold', 
        color: '#111827', 
        marginBottom: '1.5rem' 
      }}>
        All Visits ({visits.length})
      </h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {visits.map((visit) => (
          <div 
            key={visit.id} 
            style={{
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb',
              padding: '1.5rem'
            }}
          >
            {/* Header Section */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'flex-start', 
              marginBottom: '1rem',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '600', 
                  color: '#111827',
                  margin: '0 0 0.25rem 0'
                }}>
                  {visit.customerName}
                </h3>
                <p style={{ color: '#6b7280', margin: 0 }}>{visit.serviceObject}</p>
              </div>
              <span 
                className={getStatusColor(visit.status)}
                style={{
                  padding: '0.5rem 0.75rem',
                  borderRadius: '1rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  border: '1px solid'
                }}
              >
                {visit.status}
              </span>
            </div>

            {/* Customer Contact Info and Visit Details */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '1rem', 
              marginBottom: '1rem' 
            }}>
              <div>
                <h4 style={{ 
                  fontWeight: '500', 
                  color: '#111827', 
                  marginBottom: '0.5rem',
                  margin: '0 0 0.5rem 0'
                }}>
                  Contact Information
                </h4>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                  <p style={{ margin: '0.25rem 0' }}>
                    <span style={{ fontWeight: '500' }}>Phone:</span> {visit.phoneNumber}
                  </p>
                  <p style={{ margin: '0.25rem 0' }}>
                    <span style={{ fontWeight: '500' }}>Email:</span> {visit.email}
                  </p>
                </div>
              </div>
              
              <div>
                <h4 style={{ 
                  fontWeight: '500', 
                  color: '#111827', 
                  margin: '0 0 0.5rem 0'
                }}>
                  Visit Details
                </h4>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                  <p style={{ margin: '0.25rem 0' }}>
                    <span style={{ fontWeight: '500' }}>Intake Date:</span> {formatDate(visit.intakeDate)}
                  </p>
                  <p style={{ margin: '0.25rem 0' }}>
                    <span style={{ fontWeight: '500' }}>Release Date:</span> {formatDate(visit.releaseDate)}
                  </p>
                  <p style={{ margin: '0.25rem 0' }}>
                    <span style={{ fontWeight: '500' }}>Mechanic:</span> {visit.mechanic}
                  </p>
                </div>
              </div>
            </div>

            {/* Services Section */}
            {visit.services && visit.services.length > 0 && (
              <div style={{ marginBottom: '1rem' }}>
                <h4 style={{ 
                  fontWeight: '500', 
                  color: '#111827', 
                  margin: '0 0 0.5rem 0'
                }}>
                  Services
                </h4>
                <div style={{ 
                  backgroundColor: '#f9fafb', 
                  borderRadius: '0.375rem', 
                  padding: '0.75rem' 
                }}>
                  {visit.services.map((service, index) => (
                    <div 
                      key={index} 
                      style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center', 
                        fontSize: '0.875rem',
                        padding: '0.25rem 0'
                      }}
                    >
                      <span style={{ color: '#374151' }}>{service.name}</span>
                      <span style={{ fontWeight: '500', color: '#111827' }}>
                        {formatCurrency(service.price)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Parts Section */}
            {visit.parts && visit.parts.length > 0 && (
              <div style={{ marginBottom: '1rem' }}>
                <h4 style={{ 
                  fontWeight: '500', 
                  color: '#111827', 
                  margin: '0 0 0.5rem 0'
                }}>
                  Parts
                </h4>
                <div style={{ 
                  backgroundColor: '#f9fafb', 
                  borderRadius: '0.375rem', 
                  padding: '0.75rem' 
                }}>
                  {visit.parts.map((part, index) => (
                    <div 
                      key={index} 
                      style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center', 
                        fontSize: '0.875rem',
                        padding: '0.25rem 0'
                      }}
                    >
                      <span style={{ color: '#374151' }}>{part.name}</span>
                      <span style={{ fontWeight: '500', color: '#111827' }}>
                        {formatCurrency(part.price)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Notes and Recommendations */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '1rem', 
              marginBottom: '1rem' 
            }}>
              {visit.notes && (
                <div>
                  <h4 style={{ 
                    fontWeight: '500', 
                    color: '#111827', 
                    margin: '0 0 0.5rem 0'
                  }}>
                    Notes
                  </h4>
                  <p style={{ 
                    fontSize: '0.875rem', 
                    color: '#6b7280', 
                    backgroundColor: '#f9fafb', 
                    borderRadius: '0.375rem', 
                    padding: '0.75rem',
                    margin: 0
                  }}>
                    {visit.notes}
                  </p>
                </div>
              )}
              
              {visit.recommendations && (
                <div>
                  <h4 style={{ 
                    fontWeight: '500', 
                    color: '#111827', 
                    margin: '0 0 0.5rem 0'
                  }}>
                    Recommendations
                  </h4>
                  <p style={{ 
                    fontSize: '0.875rem', 
                    color: '#6b7280', 
                    backgroundColor: '#f9fafb', 
                    borderRadius: '0.375rem', 
                    padding: '0.75rem',
                    margin: 0
                  }}>
                    {visit.recommendations}
                  </p>
                </div>
              )}
            </div>

            {/* SMS Information */}
            {visit.smsSent?.confirmation && (
              <div style={{ marginBottom: '1rem' }}>
                <h4 style={{ 
                  fontWeight: '500', 
                  color: '#111827', 
                  margin: '0 0 0.5rem 0'
                }}>
                  SMS Notifications
                </h4>
                <div style={{ 
                  backgroundColor: '#eff6ff', 
                  borderRadius: '0.375rem', 
                  padding: '0.75rem' 
                }}>
                  <p style={{ 
                    fontSize: '0.875rem',
                    color: '#1e40af',
                    margin: '0 0 0.25rem 0'
                  }}>
                    <span style={{ fontWeight: '500' }}>Confirmation sent:</span> {formatDate(visit.smsSent.confirmation.date)}
                  </p>
                  <p style={{ 
                    fontSize: '0.875rem',
                    color: '#2563eb',
                    margin: 0
                  }}>
                    <span style={{ fontWeight: '500' }}>Message:</span> {visit.smsSent.confirmation.message}
                  </p>
                </div>
              </div>
            )}

            {/* Total Cost - Footer */}
            <div style={{ 
              borderTop: '1px solid #e5e7eb', 
              paddingTop: '1rem', 
              marginTop: '1rem' 
            }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center' 
              }}>
                <span style={{ 
                  fontSize: '1.125rem', 
                  fontWeight: '500', 
                  color: '#111827' 
                }}>
                  Total Cost:
                </span>
                <span style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold', 
                  color: '#059669' 
                }}>
                  {formatCurrency(visit.totalCost)}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ 
              display: 'flex', 
              gap: '0.5rem', 
              marginTop: '1rem', 
              paddingTop: '1rem', 
              borderTop: '1px solid #e5e7eb',
              flexWrap: 'wrap'
            }}>
              <button style={{
                backgroundColor: '#2563eb',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                border: 'none',
                cursor: 'pointer'
              }}>
                View Details
              </button>
              <button style={{
                backgroundColor: '#4b5563',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                border: 'none',
                cursor: 'pointer'
              }}>
                Edit Visit
              </button>
              <button style={{
                backgroundColor: '#059669',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                border: 'none',
                cursor: 'pointer'
              }}>
                Print Receipt
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}