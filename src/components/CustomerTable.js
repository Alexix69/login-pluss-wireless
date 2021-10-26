import React from "react";

import { Table, Tag, Space } from "antd";

const columns = [
  {
    title: "Nombres",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  // {
  //   title: "Age",
  //   dataIndex: "age",
  //   key: "age",
  // },
  {
    title: "Base",
    dataIndex: "base",
    key: "base",
  },
  // {
  //   title: "Tags",
  //   key: "tags",
  //   dataIndex: "tags",
  //   render: (tags) => (
  //     <>
  //       {tags.map((tag) => {
  //         let color = tag.length > 5 ? "geekblue" : "green";
  //         if (tag === "loser") {
  //           color = "volcano";
  //         }
  //         return (
  //           <Tag color={color} key={tag}>
  //             {tag.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </>
  //   ),
  // },
  // {
  //   title: "Action",
  //   key: "action",
  //   render: (text, data) => (
  //     <Space size="middle">
  //       <a>Invite {data.name}</a>
  //       <a>Delete</a>
  //     </Space>
  //   ),
  // },

  {
    title: "Subestado",
    dataIndex: "subState",
    key: "subState",
  },

  {
    title: "Fecha Rellamada",
    dataIndex: "redialDate",
    key: "redialDate",
  },
];

const data = [];
for (let i = 1; i <= 50; i++) {
  data.push({
    key: i,
    name: `Zabala Pante Emiliano Adrano ${i}`,
    base: "2021_OCT (N-R) (DINERS:VISA) (18 A 60 AÑOS) (PICHINCHA) INT-1",
    subState: `BUZON ${i}`,
  });
}

const CustomerTable = () => {
  return <Table columns={columns} dataSource={data} bordered={true} />;
};

export default CustomerTable;
