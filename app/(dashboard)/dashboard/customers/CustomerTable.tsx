import Checkbox from "components/shared/input/Checkbox";
import { VerticalDotsIcon } from "components/shared/Icons";

interface CustomerRowProps {
  customer: any;
}

const CustomerRow = (props: CustomerRowProps) => {
  return (
    <tr className="text-zinc-400 relative">
      <td>
        <Checkbox />
      </td>
      <td>{props.customer.name}</td>
      <td>{props.customer.email}</td>
      <td>{props.customer.phone}</td>
      <td>{props.customer.twitter}</td>
      <td className="text-right sticky right-0 text-white bg-black">
        <span className="w-5 h-5">
          <VerticalDotsIcon />
        </span>
      </td>
    </tr>
  );
};

interface CustomerTableProps {
  customers: any[];
}

export default function CustomerTable(props: CustomerTableProps) {
  return (
    <div className="relative overflow-hidden">
      <div className="gradient" />
      <table>
        <colgroup>
          <col className="w-12" />
          <col className="min-w-fit" />
          <col />
          <col />
          <col />
          <col className="w-12" />
        </colgroup>
        <thead>
          <tr>
            <th className="w-12">
              <Checkbox />
            </th>
            <th className="min-w-fit">Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Twitter</th>
            <th className="w-12 sticky right-0 text-white">
              <VerticalDotsIcon />
            </th>
          </tr>
        </thead>
        <tbody>
          {props.customers.map((row) => {
            return <CustomerRow key={row.id} customer={row} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
