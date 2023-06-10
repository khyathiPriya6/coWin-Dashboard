import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {vaccinationByAgeDetails} = props
  console.log(vaccinationByAgeDetails)

  return (
    <div className="card-container">
      <h1 className="card-title">Vaccination by age</h1>
      <div className="chart-container">
        <PieChart width={1000} height={500}>
          <Pie
            cx="50%"
            cy="50%"
            data={vaccinationByAgeDetails}
            startAngle={0}
            endAngle={360}
            outerRadius="80%"
            dataKey="count"
            center="[100,100]"
            align="center"
            stroke="none"
          >
            <Cell name="18-19" fill="#2d87bb" />
            <Cell name="40-60" fill="#a3df9f" />
            <Cell name="Above 60" fill="#2cc6c6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{
              padding: 30,
            }}
          />
        </PieChart>
      </div>
    </div>
  )
}

export default VaccinationByAge
