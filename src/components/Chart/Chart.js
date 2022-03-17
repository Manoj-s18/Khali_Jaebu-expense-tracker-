import './Chart.css'
import ChartBar from './ChartBar';


const Chart = props =>{
    const datapoints = props.chartPoints.map(chartPoint => chartPoint.value)
    const totalMax = Math.max(...datapoints)
    return(
        <div className='chart'>
            {props.chartPoints.map(chartPoint => <ChartBar key={chartPoint.label} label={chartPoint.label} value = {chartPoint.value} max = {totalMax}/>)}
        </div>
    )   
}

export default Chart;