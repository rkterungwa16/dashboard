import PropTypes from 'prop-types';

import { Card } from '../../shared/Card';

const stats = [
  {
    description: "Daily Transaction Volume",
    value: "2,342",
    url: "https://res.cloudinary.com/doy0uyv63/image/upload/v1598170512/small_chart_yj1kr4.png"
  },
  {
    description: "Daily Transaction Value",
    value: "₦4,000,000",
    url: "https://res.cloudinary.com/doy0uyv63/image/upload/v1598170512/small_chart_yj1kr4.png"
  },
  {
    description: "Total Transaction Volume",
    value: "452,000",
    url: "https://res.cloudinary.com/doy0uyv63/image/upload/v1598170512/small_chart_yj1kr4.png"
  },
  {
    description: "Total Transaction Value",
    value: "₦4,000,000",
    url: "https://res.cloudinary.com/doy0uyv63/image/upload/v1598170512/small_chart_yj1kr4.png"
  }
]

export const TransactionStatsDescription = (props) => (
  <span>
    {props.description}
    <style jsx>
      {
        `
          {
            font-family: Segoe UI;
            font-size: 13px;
            color: #647787;
          }
        `
      }
    </style>
  </span>
)

TransactionStatsDescription.propTypes = {
  description: PropTypes.string,
}

export const TransactionStatsValue = (props) => (
  <span>
    {props.value}
    <style jsx>
      {
        `
          {
            font-family: Segoe UI;
            font-size: 18px;
            color: #647787;
            font-weight: 600;
          }
        `
      }
    </style>
  </span>
)

TransactionStatsValue.propTypes = {
  value: PropTypes.string,
}

const TransactionStatsItem = (props) => (
  <div>
    {props.children}
    <style jsx>
      {
        `
          display: flex;
          flex-direction: column;
          padding: 5px;
        `
      }
    </style>
  </div>
)

TransactionStatsItem.propTypes = {
  children: PropTypes.node
}

const TransactionStatChart = (props) => (
  <img src={props.url} alt={props.text} />
);

TransactionStatChart.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string
}


export const TransactionStatsContainer = () => {

  return (
    <div>
      {
        stats.map((stat) => {
          return (
            <Card key={`${stat.description}-${stat.url}`}>
              <TransactionStatsItem>
                <TransactionStatsDescription description={stat.description} />
                <TransactionStatsValue value={stat.value} />
              </TransactionStatsItem>
              <TransactionStatChart url={stat.url} text={stat.description} />
            </Card>
          )
        })
      }
      <style jsx>
        {
          `
            {
              display: flex;
              justify-content: space-between;
              margin-bottom: 30px;
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
}

