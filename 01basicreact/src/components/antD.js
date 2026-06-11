import { Button, Input, Card, Table,Modal, Menu, Dropdown, DatePicker,notification } from 'antd';
import React, { useState } from 'react';

function Login() {
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [showMenu, setShowMenu] = useState(false);
      const [open, setOpen] = useState(false);

  const items = [
    {
      key: '1',
      label: 'Dropdown-1',
    },
    {
      key: '2',
      label: 'Dropdown-2',
    },
    {
      key: '3',
      label: 'Dropdown-3',
    },
  ];

   const handleChange = (date, dateString) => {
    console.log('Selected date:', dateString);
  };

    const showNotification = () => {
    notification.success({
      message: 'Success',
      description: 'Sample notification message. ',
    });
  };



  return (
    <Card title="Ant Design (Antd) component library">
      <Input placeholder="Email" />
      <br /><br />
      <Input.Password placeholder="Password" />
      <br /><br />

    <div style={{ display: 'flex', gap: '10px' }}>
      <Button type="primary">Save</Button>
      <Button type="default">Cancel</Button>
      <Button type="dashed">Add Item</Button>
      <Button type="text">View</Button>
      <Button type="link">Learn More</Button>
      <Button type="primary" danger>Delete</Button>
      <Button type="primary" loading>Saving...</Button>
      <Button type="primary" disabled>Login</Button>
    </div>
    <hr></hr>
    <div style={{ display: 'flex', gap: '10px' }}>
      <>
      <Button
        type="primary"
        onClick={() => setIsModalOpen(true)}
      >
        Open Modal
      </Button>

      <Modal
        title="Welcome"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      >
        <p>Hello from Ant Design Modal!</p>
      </Modal>
      </>
      <DatePicker onChange={handleChange} />
          <Button   
           style={{ backgroundColor: 'green', borderColor: 'green' }}
      type="primary"
      onClick={showNotification}
    >
      Show Notification
    </Button>
    </div>
    <hr></hr>
    <>
      <Button
        type="primary"
        onClick={() => setShowMenu(!showMenu)}
      >
        Toggle Menu
      </Button>

      {showMenu && (
        <Menu
          items={[
            {
              key: '1',
              label: 'Home',
            },
            {
              key: '2',
              label: 'Profile',
            },
            {
              key: '3',
              label: 'Settings',
            },
          ]}
        />
      )}
    </>
    <hr></hr>
           <>
      <Button
        type="primary"
        onClick={() => setOpen(true)}
      >
        Open Dropdown
      </Button>

      <Dropdown
        menu={{ items }}
        open={open}
        onOpenChange={setOpen}
      >
        {/* <Button style={{ marginLeft: 10 }}>
          Menu
        </Button> */}
      </Dropdown>
    </>
    <Table
  columns={[
    { title: 'Name', dataIndex: 'name' },
    { title: 'Surname', dataIndex: 'surname', key: 'surname' },
  ]}
  dataSource={[
    { key: 1, name: 'John', surname: 'Doe',},
    { key: 1, name: 'Eily', surname: 'Mathyus',}
  ]}
/>

    </Card>
    
    
  );
}

export default Login;
