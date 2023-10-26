const Table = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="flex flex-col overflow-x-auto">
      <div className="sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <table className="min-w-full text-left text-sm font-light">
            {children}
          </table>
        </div>
      </div>
    </div>
  )
}
const TableHead = ({ children }: { children: JSX.Element }) => (
  <thead className="border-b font-medium dark:border-neutral-500">
    {children}
  </thead>
)

const TableBody = ({ children }: { children: JSX.Element }) => (
  <tbody>{children}</tbody>
)

const TableData = ({ children }: { children: JSX.Element | string | number }) => (
  <td className="whitespace-nowrap px-6 py-4">{children}</td>
)
const TableHeader = ({ children }: { children: JSX.Element | string | number }) => (
  <th scope="col" className="px-6 py-4">
    {children}
  </th>
)

Table.Body = TableBody
Table.Head = TableHead
Table.Data = TableData
Table.Header = TableHeader
export default Table
