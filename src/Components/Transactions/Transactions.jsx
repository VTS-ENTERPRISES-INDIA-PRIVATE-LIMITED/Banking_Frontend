import React, { useState } from 'react';
import './Transactions.css';
import { Form, Input, Pagination } from 'antd';

function Transactions() {
  const transactions = [
    { date: '2024-06-01', type: 'Debit', amount: 100, balance: 500 },
    { date: '2024-06-02', type: 'Credit', amount: 200, balance: 700 },
    { date: '2024-06-03', type: 'Debit', amount: 150, balance: 550 },
    { date: '2024-06-04', type: 'Credit', amount: 300, balance: 850 },
    { date: '2024-06-03', type: 'Debit', amount: 150, balance: 550 },
    { date: '2024-06-04', type: 'Credit', amount: 300, balance: 850 },
    { date: '2024-06-01', type: 'Debit', amount: 100, balance: 500 },
    { date: '2024-06-02', type: 'Credit', amount: 200, balance: 700 },
    { date: '2024-06-03', type: 'Debit', amount: 150, balance: 550 },
    { date: '2024-06-04', type: 'Credit', amount: 300, balance: 850 },
    { date: '2024-06-03', type: 'Debit', amount: 150, balance: 550 },
    { date: '2024-06-04', type: 'Credit', amount: 300, balance: 850 },
    { date: '2024-06-01', type: 'Debit', amount: 100, balance: 500 },
    { date: '2024-06-02', type: 'Credit', amount: 200, balance: 700 },
    { date: '2024-06-03', type: 'Debit', amount: 150, balance: 550 },
    { date: '2024-06-04', type: 'Credit', amount: 300, balance: 850 },
    { date: '2024-06-03', type: 'Debit', amount: 150, balance: 550 },
    { date: '2024-06-04', type: 'Credit', amount: 300, balance: 850 },
    { date: '2024-06-01', type: 'Debit', amount: 100, balance: 500 },
    { date: '2024-06-02', type: 'Credit', amount: 200, balance: 700 },
    { date: '2024-06-03', type: 'Debit', amount: 150, balance: 550 },
    { date: '2024-06-04', type: 'Credit', amount: 300, balance: 850 },
    { date: '2024-06-03', type: 'Debit', amount: 150, balance: 550 },
    { date: '2024-06-04', type: 'Credit', amount: 300, balance: 850 },
    { date: '2024-06-01', type: 'Debit', amount: 100, balance: 500 },
    { date: '2024-06-02', type: 'Credit', amount: 200, balance: 700 },
    { date: '2024-06-03', type: 'Debit', amount: 150, balance: 550 },
    { date: '2024-06-04', type: 'Credit', amount: 300, balance: 850 },
    { date: '2024-06-03', type: 'Debit', amount: 150, balance: 550 },
    { date: '2024-06-04', type: 'Credit', amount: 300, balance: 850 },
    
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 8;

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="transactions-container">
        <Form layout="vertical">
          <Form.Item className='label' label="Account Number">
            <Input placeholder='Account Number' required />
          </Form.Item>
          <Form.Item className='label' label="Name">
            <Input placeholder='Name' required />
          </Form.Item>
          <Form.Item className='label' label="Available Balance">
            <Input placeholder='Balance' required />
          </Form.Item>
        </Form>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Debit/Credit</th>
              <th>Amount</th>
              <th>Total balance</th>
            </tr>
          </thead>
          <tbody>
            {currentTransactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.date}</td>
                <td>{transaction.type}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          current={currentPage}
          pageSize={transactionsPerPage}
          total={transactions.length}
          onChange={handleChangePage}
          style={{ marginTop: '20px', textAlign: 'center' }}
        />
      </div>
    </div>
  );
}

export default Transactions;