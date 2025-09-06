import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataTable from '../../../Pages/TableLayout/TableLayout';
import { Button } from 'react-bootstrap';
import Navbar from '../../../Pages/Navbar/Navbar';
import { FaCheck, FaTimes } from 'react-icons/fa';

const Customers = () => {
  const navigate = useNavigate();

  // Dummy customers data
  const [customersData, setCustomersData] = useState([
    {
      id: 1,
      name: 'John Smith',
      mobile: '+1-555-0123',
      email: 'john.smith@example.com',
      address: '123 Main St, New York, NY 10001'
    },
    {
      id: 2,
      name: 'Emily Johnson',
      mobile: '+1-555-0124',
      email: 'emily.johnson@example.com',
      address: '456 Oak Ave, Los Angeles, CA 90001'
    },
    {
      id: 3,
      name: 'Michael Williams',
      mobile: '+1-555-0125',
      email: 'michael.williams@example.com',
      address: '789 Pine Rd, Chicago, IL 60601'
    },
    {
      id: 4,
      name: 'Sarah Brown',
      mobile: '+1-555-0126',
      email: 'sarah.brown@example.com',
      address: '101 Maple Ln, Houston, TX 77001'
    },
    {
      id: 5,
      name: 'David Jones',
      mobile: '+1-555-0127',
      email: 'david.jones@example.com',
      address: '202 Elm St, Phoenix, AZ 85001'
    },
    {
      id: 6,
      name: 'Jennifer Garcia',
      mobile: '+1-555-0128',
      email: 'jennifer.garcia@example.com',
      address: '303 Birch Ave, Philadelphia, PA 19101'
    },
    {
      id: 7,
      name: 'Robert Miller',
      mobile: '+1-555-0129',
      email: 'robert.miller@example.com',
      address: '404 Cedar Rd, San Antonio, TX 78201'
    },
    {
      id: 8,
      name: 'Maria Davis',
      mobile: '+1-555-0130',
      email: 'maria.davis@example.com',
      address: '505 Spruce Dr, San Diego, CA 92101'
    }
  ]);

  // Handle accept action
  const handleAccept = (customerId) => {
    alert(`Customer ${customerId} accepted`);
    // Add your accept logic here
  };

  // Handle reject action
  const handleReject = (customerId) => {
    alert(`Customer ${customerId} rejected`);
    // Add your reject logic here
  };

  // Table columns configuration
  const columns = React.useMemo(
    () => [
      {
        Header: 'Customer Name',
        accessor: 'name',
      },
      {
        Header: 'Mobile Number',
        accessor: 'mobile',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Address',
        accessor: 'address',
      },
      {
        Header: 'Actions',
        Cell: ({ row }) => (
          <div>
            <Button
              variant="success"
              size="sm"
              className="me-2"
              onClick={() => handleAccept(row.original.id)}
            >
              <FaCheck /> Accept
            </Button>
            <Button
              variant="danger"
              size="sm"
              onClick={() => handleReject(row.original.id)}
            >
              <FaTimes /> Reject
            </Button>
          </div>
        ),
      },
    ],
    []
  );

  const handleAddCustomer = () => {
    navigate('/customerregister');
  };

  return (
    <>
      <Navbar/>
      <div className="main-container">
        <div className="customers-table-container" style={{marginTop:'70px'}}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3>Customers</h3>
          
          </div>
          
          <DataTable 
            columns={columns} 
            data={customersData} 
            initialSearchValue=""
          />
        </div>
      </div>
    </>
  );
};

export default Customers;