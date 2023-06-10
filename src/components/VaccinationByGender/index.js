import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {vaccinationByGenderDetails} = props
  console.log(vaccinationByGenderDetails)

  return (
    <div className="card-container">
      <h1 className="card-title">Vaccination by gender</h1>
      <div className="chart-container">
        <PieChart width={1000} height={500}>
          <Pie
            cx="50%"
            cy="50%"
            data={vaccinationByGenderDetails}
            startAngle={180}
            endAngle={0}
            innerRadius="40%"
            outerRadius="80%"
            dataKey="count"
            align="center"
            stroke="none"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
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

export default VaccinationByGender
