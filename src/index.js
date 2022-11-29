import React from "react";
import ReactDOM from "react-dom";
// import "antd/dist/antd.css";
import "./index.css";
import { Table, Select } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name"
  },
  {
    title: "Age",
    dataIndex: "age"
  },
  {
    title: "Address",
    dataIndex: "address"
  }
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`
  });
}

class App extends React.Component {
  state = {
    selectedRowKeys: []
  };

  onSelectChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys });
  };

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
    };

    return (
      <div>
        <Select
          mode="multiple"
          onChange={this.onSelectChange}
          style={{ width: "100%" }}
          value={selectedRowKeys}
        >
          {data.map((item) => {
            return (
              <Select.Option key={item.key} value={item.key}>
                {item.name}
              </Select.Option>
            );
          })}
        </Select>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
