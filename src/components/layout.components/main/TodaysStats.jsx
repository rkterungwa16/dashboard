import PropTypes from 'prop-types';

import { Icon } from '../../shared.components/Icon';

export const TodaysStat = () => (
  <TodaysStatContainer>
    <TodaysStatChartContainer>
      <TodaysStatItem>
        <TodaysDate value="Today: 5, Aug 2018" />
        <TodaysInputsItem>
          <SelectInput />
          <ButtonWrapper>
            <Button>
              <ArrowLeft />
            </Button>
            <Button>
              <ArrowRight />
            </Button>
          </ButtonWrapper>
        </TodaysInputsItem>
      </TodaysStatItem>
    </TodaysStatChartContainer>

    <TodaysStatDetailsContainer>
      <TodaysStatDetailItem>
        <HeaderText value="Orders" />
        <ProgressBarWrapper />
        <TodaysStatOrderDetails />
      </TodaysStatDetailItem>

      <TodaysStatDetailItem>
        <HeaderText value="Payments" />
        <ProgressBarWrapper />
        <TodaysStatPaymentDetails />
      </TodaysStatDetailItem>
    </TodaysStatDetailsContainer>
  </TodaysStatContainer>
)
export const TodaysStatContainer = (props) => (
  <div>
    {props.children}
    <style jsx>
      {
        `
          {
            position: relative;
            display: flex;
            justify-content: space-between;
            height: 329px;
          }
          @media screen and (max-width: 600px) {
            {
              flex-direction: column;
              align-items: center;
            }
          }
        `
      }
    </style>
  </div>
)

TodaysStatContainer.propTypes = {
  children: PropTypes.node
}

export const TodaysStatChartContainer = (props) => (
  <div>
    {props.children}
    <style jsx>
      {
        `
          {
            width: 60%;
            position: relative;
            display: flex;
            flex-direction: column;
            background: #FFFFFF;
            border: 1px solid #EEF8FD;
            box-sizing: border-box;
            border-radius: 2px;
          }

          @media screen and (max-width: 600px) {
            {
              display: none;
            }
          }
        `
      }
    </style>
  </div>
)

TodaysStatChartContainer.propTypes = {
  children: PropTypes.node
}

export const TodaysStatItem = (props) => (
  <div>
    {props.children}
    <style jsx>
      {
        `
          {
            display: flex;
            justify-content: space-between;
            padding: 10px;
          }
        `
      }
    </style>
  </div>
)

TodaysStatItem.propTypes = {
  children: PropTypes.node
}

export const TodaysDate = (props) => (
  <span>
    {props.value}
    <style jsx>
      {
        `
          {
            font-family: Segoe UI;
            font-size: 18px;
            color: #4F4F4F;
            font-weight: 600;
          }
        `
      }
    </style>
  </span>
)

TodaysDate.propTypes = {
  value: PropTypes.string,
}

export const TodaysInputsItem = (props) => (
  <div>
    {props.children}
    <style jsx>
      {
        `
          {
            display: flex;
            justify-content: space-between;
            width: 40%;
          }
        `
      }
    </style>
  </div>
)

TodaysInputsItem.propTypes = {
  children: PropTypes.node
}

export const SelectInput = () => (
  <select name="month" id="month">
    <option value="1 Jan - 1 Jun">1 Jan - 1 Jun</option>
    <style jsx>
      {
        `
          {
            border: 1px solid #DDE0E3;
            border-radius: 4.25px;
            color: #DDE0E3;
          }
        `
      }
    </style>
  </select>
)

export const ButtonWrapper = (props) => (
  <div>
    {props.children}
    <style jsx>
      {
        `
          {
            display: flex;
            justify-content: space-between;
            width: 25%;
          }
        `
      }
    </style>
  </div>
)
export const Button = (props) => (
  <button>
    {props.children}
    <style jsx>
      {
        `
          {
            display: flex;
            align-items: center;
            width: 29.36px;
            height: 22.97px;
            background: linear-gradient(0deg, #F2F4F7 0%, #FFFFFF 100%);
            border: 1px solid #CED0DA;
            box-sizing: border-box;
            border-radius: 4px;
          }
        `
      }
    </style>
  </button>
)
export const ArrowLeft = () => {
  return (
    <Icon
      width="15px"
      height="15px"
      url="https://res.cloudinary.com/doy0uyv63/image/upload/v1598176437/Left_Arrow_ahxknd.png"
      alt="Arrow Left"
    />
  )
}

export const ArrowRight = () => {
  return (
    <Icon
      width="15px"
      height="15px"
      url="https://res.cloudinary.com/doy0uyv63/image/upload/v1598176421/Right_Arrow_tninnd.png"
      alt="Arrow Right"
    />
  )
}

export const MonthChart = () => (
  <div></div>
)

export const TodaysStatDetailsContainer = (props) => (
  <div>
    {props.children}
    <style jsx>
      {
        `
          {
            width: 39.5%;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
          }
          @media screen and (max-width: 600px) {
            {
              width: 100%;
            }
          }
        `
      }
    </style>
  </div>
)

TodaysStatDetailsContainer.propTypes = {
  children: PropTypes.node
}

export const TodaysStatDetailItem = (props) => (
  <div>
    {props.children}
    <style jsx>
      {
        `
          {
            display: flex;
            flex-direction: column;
            background: #FFFFFF;
            border: 1px solid #EEF8FD;
            box-sizing: border-box;
            border-radius: 2px;
            padding: 20px;
            height: 49%;
            justify-content: space-between;
          }
        `
      }
    </style>
  </div>
)

const orders = [
  { description: "Pending Orders:", value: 20, color: "#FDC203" },
  { description: "Reconciled Orders:", value: 80, color: "#27AE60" },
  { description: "Total Orders:", value: 80, color: "#1875F0" }
]

const payments = [
  { description: "Un-reconciled Payments:", value: 20, color: "#FDC203" },
  { description: "Reconciled Payments:", value: 80, color: "#27AE60" },
  { description: "Total Payments:", value: 80, color: "#1875F0" }
];

const TodaysStatsItemDetailsTextWrapper = (props) => (
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
);

export const HeaderText = (props) => (
  <span>
    {props.value}
    <style jsx>
      {
        `
          {
            font-family: Segoe UI;
            font-size: 14px;
            color: #4F4F4F;
            font-weight: bold;
          }
        `
      }
    </style>
  </span>
)

HeaderText.propTypes = {
  value: PropTypes.string
}

export const DescriptionText = (props) => (
  <span>
    {props.value}
    <style jsx>
      {
        `
          {
            font-family: Segoe UI;
            font-size: 14px;
            color: #4F4F4F;
          }
        `
      }
    </style>
  </span>
)

DescriptionText.propTypes = {
  value: PropTypes.string
}

export const ValueText = (props) => (
  <span>
    {props.value}
    <style jsx>
      {
        `
          {
            font-family: Segoe UI;
            font-size: 14px;
            color: ${props.color};
            margin-left: 10px;
            font-weight: 600;
          }
        `
      }
    </style>
  </span>
)

ValueText.propTypes = {
  value: PropTypes.string,
  color: PropTypes.string
}

export const TodaysStatOrderDetails = () => {
  return (
    <>
      {
        orders.map((order, index) => {
          return (
            <TodaysStatsItemDetailsTextWrapper key={`${index}-${order.description}`}>
              <DescriptionText value={order.description} />
              <ValueText value={order.value} color={order.color} />
            </TodaysStatsItemDetailsTextWrapper>
          )
        })
      }
    </>
  )
}

export const TodaysStatPaymentDetails = () => {
  return (
    <>
      {
        payments.map((payment, index) => {
          return (
            <TodaysStatsItemDetailsTextWrapper key={`${index}-${payment.description}`}>
              <DescriptionText value={payment.description} />
              <ValueText value={payment.value} color={payment.color} />
            </TodaysStatsItemDetailsTextWrapper>
          )
        })
      }
    </>
  )
}

export const ProgressBarWrapper = () => (
  <div>
    <ProgressBar color="#27AE60" width="80%" />
    <ProgressBar color="#FDC203" width="20%" />
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

export const ProgressBar = (props) => (
  <div>
    <style jsx>
      {
        `
          {
            background: ${props.color};
            width: ${props.width};
            height: 4px;
          }
        `
      }
    </style>
  </div>
)

ProgressBar.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string
}
