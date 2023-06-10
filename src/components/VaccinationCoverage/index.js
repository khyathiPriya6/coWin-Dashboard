import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {vaccinationCoverageDetails} = props
  console.log(vaccinationCoverageDetails)

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="card-container">
      <h1 className="card-title">Vaccination Coverage</h1>

      <BarChart
        width={1000}
        height={300}
        data={vaccinationCoverageDetails}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="vaccine_date"
          tick={{
            stroke: 'gray',
            strokeWidth: 1,
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: 'gray',
            strokeWidth: 0,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />
        <Bar
          dataKey="dose_1"
          name="Dose-1"
          fill=" #5a8dee"
          barSize="20%"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="dose_2"
          name="Dose-2"
          fill=" #f54394"
          barSize="20%"
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
