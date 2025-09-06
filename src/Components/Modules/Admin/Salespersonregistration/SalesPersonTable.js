import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataTable from '../../../Pages/TableLayout/TableLayout'; // Import the reusable DataTable component
import { Button } from 'react-bootstrap';
import Navbar from '../../../Pages/Navbar/Navbar';

const SalesPersonTable = () => {
    const navigate = useNavigate();

  // Dummy salespersons data
  const [salesPersonsData, setSalesPersonsData] = useState([
    {
      id: 1,
      name: 'John Doe',
      state: 'California',
      email: 'john.doe@example.com',
      mobile: '+1-555-0123'
    },
    {
      id: 2,
      name: 'Jane Smith',
      state: 'New York',
      email: 'jane.smith@example.com',
      mobile: '+1-555-0124'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      state: 'Texas',
      email: 'mike.johnson@example.com',
      mobile: '+1-555-0125'
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      state: 'Florida',
      email: 'sarah.wilson@example.com',
      mobile: '+1-555-0126'
    },
    {
      id: 5,
      name: 'David Brown',
      state: 'Illinois',
      email: 'david.brown@example.com',
      mobile: '+1-555-0127'
    },
    {
      id: 6,
      name: 'Emily Davis',
      state: 'California',
      email: 'emily.davis@example.com',
      mobile: '+1-555-0128'
    },
    {
      id: 7,
      name: 'Robert Miller',
      state: 'Ohio',
      email: 'robert.miller@example.com',
      mobile: '+1-555-0129'
    },
    
  ]);

  // Table columns configuration
  const columns = React.useMemo(
    () => [
      {
        Header: 'Sales Person Name',
        accessor: 'name',
      },
      {
        Header: 'State',
        accessor: 'state',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Mobile',
        accessor: 'mobile',
      },
    ],
    []
  );

const handleAddSalesPerson = () => {
  navigate('/salepersonregister');
};

  return (
    <>
    <Navbar/>
    <div className="main-container">
      <div className="sales-persons-table-container" style={{marginTop:'70px'}}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3>Sales Persons</h3>
          <Button
            className="create_but"
            onClick={handleAddSalesPerson}
            style={{ backgroundColor: '#a36e29', borderColor: '#a36e29' }}
          >
            + Add Sales Person
          </Button>
        </div>
        
        <DataTable 
          columns={columns} 
          data={salesPersonsData} 
          initialSearchValue=""
        />
      </div>
    </div>
    </>
  );
};

export default SalesPersonTable;