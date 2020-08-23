

import PropTypes from 'prop-types';

import { Icon } from '../shared/Icon';

const payments = [
  { url: "https://res.cloudinary.com/doy0uyv63/image/upload/v1598163291/wallet-43_u0wrsm.png", text: "All Payments" },
  { url: "https://res.cloudinary.com/doy0uyv63/image/upload/v1598168474/reconciled_payments_vxo7ro.png", text: "Reconciled Payments" },
  { url: "https://res.cloudinary.com/doy0uyv63/image/upload/v1598163351/wallet-43_1_unoad2.png", text: "Un-Reconciled Payments" },
  { url: "https://res.cloudinary.com/doy0uyv63/image/upload/v1598163401/ic_fiber_manual_record_48px_tf0nrh.png", text: "Manual Settlement" }
]

const orders = [
  { url: "https://res.cloudinary.com/doy0uyv63/image/upload/v1598163521/all_orders_n8wl0p.png", text: "All Orders" },
  { url: "https://res.cloudinary.com/doy0uyv63/image/upload/v1598163629/pending_orders_dhflqo.png", text: "Pending Orders" },
  { url: "https://res.cloudinary.com/doy0uyv63/image/upload/v1598163684/reconciled_orders_zkbimi.png", text: "Reconciled Orders" }
]

export const SidebarContainer = (props) => (
  <>
    <div>
      {props.children}
    </div>
    <style jsx>
      {`
         {
          width: 260px;
          height: 100vh;
          padding-top: 74px;
          position: relative;
          overflow-x: hidden;
          overflow-y: hidden;
          display: flex;
          flex-direction: column;
          border-right: 1px solid #e1e1e1;
          background-color: #FFFFFF;
        }

        @media screen and (max-width: 600px) {
          {
           z-index: 99;
           position: absolute;
           top: 0px;
           width: ${props.isOpen ? "260px" : 0};
           padding-left: ${props.isOpen ? "25px" : 0};
           padding-right: ${props.isOpen ? "25px" : 0};
           padding-top: ${props.isOpen ? "74px" : 0};
           transition: 0.15s ease-out;
         }
        }
      `}
    </style>
  </>
);

SidebarContainer.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool
}

SidebarContainer.defaultProps = {
  isOpen: false
}

export const GenerateInvoiceButton = () => (
  <button>
    Generate Invoice
    <style jsx>
      {
        `
          {
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 12px;
            line-height: 14px;
            display: flex;
            align-items: flex-end;
            text-align: center;
            letter-spacing: 0.2px;
            color: #FFFFFF;
            background: #27AE60;
            border-radius: 30px;
            width: 163px;
            height: 33px;
            border: none;
            display: flex;
            justify-content: center;
            align-items: center;
            text-transform: uppercase;
            outline: none;
            cursor: pointer;
            margin-left: 25px;
          }
        `
      }
    </style>
  </button>
);

export const SidebarItem = (props) => (
  <div>
    {props.children}
    <style jsx>
      {
        `
          {
            display: flex;
            align-items: center;
            padding-left: 25px;
          }
          :hover {
            background-color: #1875f040;
            border-left: 4px solid #1875F0;
          }
        `
      }
    </style>
  </div>
)

SidebarItem.propTypes = {
  children: PropTypes.node
}

export const SidebarText = (props) => (
  <span>
    {props.content}
    <style jsx>
      {
        `
          {
            font-family: Segoe UI;
            font-size: 13px;
            margin-top: ${props.marginTop};
            margin-bottom: ${props.marginBottom};
            margin-left: ${props.marginLeft};
            color: #647787;
          }
          :hover {
            color: #000;
          }
        `
      }
    </style>
  </span>
)

SidebarText.propTypes = {
  content: PropTypes.string,
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string
}

SidebarText.defaultProps = {
  marginLeft: "0px"
}

export const Payments = () => {
  return payments.map((payment) => {
    return (
      <SidebarItem key={payment.url}>
        <Icon
          url={payment.url}
          alt={payment.text}
        />
        <SidebarText
          content={payment.text}
          marginTop="5px"
          marginBottom="5px"
          marginLeft="20px"
        />
      </SidebarItem>
    )
  })
}

export const Orders = () => {
  return orders.map((order) => {
    return (
      <SidebarItem key={order.url}>
        <Icon
          url={order.url}
          alt={order.text}
        />
        <SidebarText
          content={order.text}
          marginTop="5px"
          marginBottom="5px"
          marginLeft="20px"
        />
      </SidebarItem>
    )
  })
}


