import { Table } from "antd";
import { useState, useEffect } from "react";
import { fetchRecords } from "./fetchrecorder";

function Paginatedtest() {
  const [dataSource, setDataSource] = useState([]);
  const [totalPassengers, setTotalPassengers] = useState(1);
  const [loading, setLoading] = useState(false);
  const URL = "https://api.instantwebtools.net/v1/passenger";

  useEffect(() => {
    // Initial fetch of records for page 1 with 10 pageSize
    fetchRecords(1, 10, URL, setDataSource, setTotalPassengers, setLoading);
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Trips",
      dataIndex: "trips",
      key: "trips",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Table
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        pagination={{
          total: totalPassengers,
          onChange: (page, pageSize) => {
            // Fetch new data when pagination is changed
            setLoading(true); // Set loading to true while fetching new data
            fetchRecords(page, pageSize, URL, setDataSource, setTotalPassengers, setLoading);
          },
        }}
        bordered
      />
    </div>
  );
}

export default Paginatedtest;
