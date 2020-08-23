import PropTypes from 'prop-types';

import { Icon } from "../../shared/Icon";

export const PaymentTitle = () => (
  <span>
    Payments
    <style jsx>
      {
        `
          {
            font-family: Segoe UI;
            font-size: 36px;
            color: #262626;
            font-weight: 600;
            margin-top: 20px;
          }
        `
      }
    </style>
  </span>
);

export const PaymentsWrapper = (props) => (
  <div>
    <PaymentPageTextWrapper>
      <PaymentPageText text="Showing" />
      <PaymentPageText text="20" color="#1875F0" />
      <ArrowDown />
      <PaymentPageText text="out of 500 payments" />
    </PaymentPageTextWrapper>
    <PaymentsItem>
      <SearchIcon />
      <SearchInput />
    </PaymentsItem>
    <PaymentsItem>
      <PaymentPageText text="Show" />
      <SelectInput />
    </PaymentsItem>
    <style jsx>
      {
        `
          {
            display: flex;
            margin-top: 20px;
          }
        `
      }
    </style>
  </div>
);

export const PaymentPageTextWrapper = (props) => (
  <div>
    {props.children}
    <style jsx>
      {
        `
          {
            display: flex;
            width: 33.33%;
            align-items: center;
          }
        `
      }
    </style>
  </div>
)

export const PaymentPageText = (props) => (
  <span>
    {props.text}
    <style jsx>
      {
        `
          {
            font-family: Segoe UI;
            font-size: 13px;
            color: ${props.color ? props.color : '#262626'};
            margin-left: 10px;
          }
        `
      }
    </style>
  </span>
);

PaymentPageText.propTypes = {
  text: PropTypes.string,
  changeColor: PropTypes.bool
}

PaymentPageText.defaultProps = {
  color: ""
}

export const ArrowDown = () => {
  return (
    <Icon
      width="10px"
      height="10px"
      url="https://res.cloudinary.com/doy0uyv63/image/upload/v1598197235/Vector_etpff3.png"
      alt="Arrow Down"
    />
  )
}

export const PaymentsItem = (props) => {
  return (
    <div>
      {props.children}
      <style jsx>
        {
          `
            {
              display: flex;
              align-items: center;
              position: relative;
              width: 33.33%;
              justify-content: center;
            }
          `
        }
      </style>
    </div>
  )
}

PaymentsItem.propTypes = {
  children: PropTypes.node
}

export const SearchIcon = () => {
  return (
    <>
      <img
        width="10px"
        height="10px"
        src="https://res.cloudinary.com/doy0uyv63/image/upload/v1598122745/Search_mvacgp.png"
        alt="Logo"
      />
      <style jsx>
        {
          `
            {
              position: absolute;
              left: 20px;
            }
          `
        }
      </style>
    </>
  )
}

export const SearchInput = () => {
  return (
    <>
      <input placeholder="Search" />
      <style jsx>
        {
          `
            {
              border: none;
              border-bottom: 1px solid #787878;
              outline: none;
              background: inherit;
              width: 90%;
              padding-left: 15px;
            }
            ::placeholder {
              font-family: Segoe UI;
              font-size: 12px;
              line-height: 16px;
              color: #979797;
            }
          `
        }
      </style>
    </>
  )
}

export const SelectInput = () => (
  <select name="payment" id="payment">
    <option value="all">All</option>
    <option value="reconciled">Reconciled</option>
    <option value="un-reconciled">Un-reconciled</option>
    <option value="settled">Settled</option>
    <option value="unsettled">Unsettled</option>
    <style jsx>
      {
        `
          {
            border-radius: 4.25px;
            color: #414042;
            background: #E5E5E5;
            border: 1px solid #787878;
            margin-left: 10px;
          }
          :hover {
            background: #F4F4F4;
          }
        `
      }
    </style>
  </select>
);

export const PaymentTable = () => (
  <table>
    <TableHead>
      <TableRow>
        <TableHeadCell value="Item Type" />
        <TableHeadCell value="Price" />
        <TableHeadCell value="Transaction No" />
        <TableHeadCell value="Time" />
        <TableHeadCell value="Status" />
      </TableRow>
    </TableHead>
    <tbody>
      <TableRow>
        <TableDataCell>
        </TableDataCell>
      </TableRow>
    </tbody>
    <style jsx>
      {
        `
          {
            margin-top: 20px;
            border-spacing: 0;
            border-collapse: collapse;
          }
        `
      }
    </style>
  </table>
)

// Apple Mac Book 15" 250 SSD 12GB
export const TableHead = (props) => (
  <thead>
    {props.children}
    <style jsx>
      {
        `
          {
            height: 42px;
            background: #EAEEF0;
            border: none;
          }
        `
      }
    </style>
  </thead>
)

export const TableHeadCell = (props) => (
  <th>
    {props.value}
    <style jsx>
      {
        `
          {
            font-family: Segoe UI;
            font-size: 14px;
            color: #7F8FA4;
            font-weight: 400;
            height: 42px;
          }
        `
      }
    </style>
  </th>
);

TableHeadCell.propTypes = {
  value: PropTypes.string
}

export const TableRow = (props) => (
  <tr>
    {props.children}
    <style jsx>
      {
        `
          {

          }
        `
      }
    </style>
  </tr>
);

export const TableDataCell = (props) => (
  <td>
    {props.children}
    <style jsx>
      {
        `
          {

          }
        `
      }
    </style>
  </td>
)

export const ItemTypeWrapper = (props) => (
  <div>
    {props.children}
    <style jsx>
      {
        `
          {
            display: flex;
          }
        `
      }
    </style>
  </div>
)

export const ItemTypeLable = (props) => (
  <span>
    {props.text}
    <style jsx>
      {
        `
          {
            height: 36px;
            width: 36px;
            border-radius: 50%;
            background: #7F8FA4;
          }
        `
      }
    </style>
  </span>
)
