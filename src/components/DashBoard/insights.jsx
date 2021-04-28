import React from 'react'
import Chart from 'react-google-charts';

const Insights = () => {
    return (
        <>
            <div className="container">
                        <h1 className="mt-4">Insights</h1>
                        <hr/>
                        <div className="row">
                            <div className="col-xl-3 col-md-6">
                                <div className="card bg-primary text-white mb-4">
                                    <div className="card-body">Avg Active Users Daily</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <span className="small text-white stretched-link" >5000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                            <div className="card bg-success text-white mb-4">
                                    <div className="card-body">Avg New Users per Week</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <span className="small text-white stretched-link" href="#">1000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                            <div className="card bg-primary text-white mb-4">
                                    <div className="card-body">Top Trending Domain</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <span className="small text-white stretched-link" href="#">Web Development</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                            <div className="card bg-success text-white mb-4">
                                    <div className="card-body">Top Trending Course</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <span className="small text-white stretched-link" href="#">React JS</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-xl-12">
                            <div className="card mb-4">
                                <div className="card-header">
                                <i className="fas fa-chart-area mr-1"></i>
                                        User Base of Gurukul World Wide
                                </div>
                                <div className="card-body">
                                <Chart
  width={'auto'}
  height={'300px'}
  chartType="GeoChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Country', 'Users'],
    ['Germany', 200],
    ['United States', 700],
    ['Brazil', 400],
    ['Canada', 500],
    ['France', 300],
    ['India', 1000],
    ['Mexico', 100],
    ['Japan', 800],
    ['Singapore', 200],
    ['South Africa', 200]
  ]}
  options={{
    chart: {
      title: 'Daily Active Users on Gurukul',
      subtitle: 'in thousands, for the Month April, 2021',
    },
  }}
  // Note: you will need to get a mapsApiKey for your project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  mapsApiKey="AIzaSyD4kXHMzsI1nxrRJOnEc_mVNcqZX6pPWA4"
  rootProps={{ 'data-testid': '1' }}
/>
</div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card mb-4">
                                    <div className="card-header">
                                        <i className="fas fa-chart-area mr-1"></i>
                                        Daily Active Users on Gurukul
                                    </div>
                                    <div className="card-body">
                                    <Chart
  width={'500px'}
  height={'200px'}
  chartType="Line"
  loader={<div>Loading Chart</div>}
  data={[
    [
      'Day',
      'Users',
    ],
    [1, 1.0],
    [2, 2.0],
    [3, 5.0],
    [4, 3.0],
    [5, 7.5],
    [6, 10.9],
    [7, 15.2],
    [8, 17.6],
    [9, 16.8],
    [10, 14.3],
    [11, 20.7],
    [12, 22.5],
    [13, 18.4],
    [14, 15.3],
    [15, 14.3],
    [16, 16.0],
    [17, 16.9],
    [18, 15.5],
    [19, 14.9],
    [20, 14.0],
    [21, 13.5],
    [22, 15.8],
    [23, 17.2],
    [24, 19.5],
    [25, 18.6],
    [26, 19.4],
    [27, 20.2],
    [28, 19.7],
    [29, 18.9],
  ]}
  options={{
    chart: {
    //   title: 'Daily Active Users on Gurukul',
    //   subtitle: 'in thousands, for the Month April, 2021',
    },
  }}
  rootProps={{ 'data-testid': '3' }}
/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="card mb-4">
                                    <div className="card-header">
                                        <i className="fas fa-chart-bar mr-1"></i>
                                        New Users on Gurukul per Week
                                    </div>
                                    <div className="card-body">
                                    <Chart
  width={'500px'}
  height={'200px'}
  chartType="Bar"
  loader={<div>Loading Chart</div>}
  data={[
    ['Week', 'New Registrations'],
    ['1st', 1000],
    ['2nd', 1170],
    ['3rd', 660],
    ['4th', 1030],
  ]}
  options={{
    // Material design options
    chart: {
    //   title: 'New Users on Gurukul',
    //   subtitle: 'New User Registration per Week',
    },
  }}
  // For tests
  rootProps={{ 'data-testid': '2' }}
/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* <div className="encircle bounce animated">
                    <div className="arrow"></div>
                    
                    </div> */}

                    <hr/>
                
                 
<div className="container">
            <h1 className="mt-4"> Domain Wise Insights</h1>
            <hr/>
            <div className="row">
                <div className="col-xl-3 col-md-6">
                    <div className="card bg-primary text-white mb-4">
                        <div className="card-body">Top Course in AI</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            <span className="small text-white stretched-link" href="#">Basic of Python</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                <div className="card bg-success text-white mb-4">
                        <div className="card-body">Top Course in Web Development</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            <span className="small text-white stretched-link" href="#">Complete JS</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                <div className="card bg-primary text-white mb-4">
                        <div className="card-body">Top Course in Android</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            <span className="small text-white stretched-link" href="#">Complete JAVA</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                <div className="card bg-success text-white mb-4">
                        <div className="card-body">Top Course in IOT</div>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            <span className="small text-white stretched-link" href="#">Introduction to IOT</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
            <div className="col-xl-12">
                <div className="card mb-4">
                    <div className="card-header">
                    <i className="fas fa-chart-area mr-1"></i>
                            Daily Active Users per Domain
                    </div>
                    <div className="card-body">
                    <Chart
width={'auto'}
height={'500px'}
chartType="Line"
loader={<div>Loading Chart</div>}
data={[
[
'Day',
'AI',
'Web Development',
'Android',
'IOT',
'Programming Languages',
'Digital Marketing'
],
[1, 0.2, 0.5, 0.1, 0.0, 0.3, 0.0],
[2, 0.4, 1.2, 0.2, 0.1, 0.5, 0.0],
[3, 1.0, 2.0, 0.7, 0.3, 1.2, 0.2],
[4, 0.3, 2.5, 1.0, 0.4, 1.3, 0.2],
[5, 1.8, 3.0, 2.5, 0.5, 1.4, 0.3],
[6, 2.7, 3.9, 3.2, 0.7, 1.5, 0.5],
[7, 3.8, 4.5, 3.5, 0.8, 1.5, 0.5],
[8, 3.5, 4.6, 3.7, 1.0, 1.6, 0.4],
[9, 3.3, 5.1, 4.0, 1.1, 1.7, 0.6],
[10, 2.8, 4.7, 4.1, 1.3, 1.4, 0.5],
[11, 4.1, 4.6, 4.3, 1.2, 1.6, 0.5],
[12, 4.5, 4.0, 4.5, 1.5, 1.8, 0.7],
[13, 3.6, 3.9, 4.6, 1.6, 1.9, 0.6],
[14, 3.0, 3.5, 4.7, 1.7, 1.7, 0.7],
[15, 2.8, 3.4, 4.4, 1.4, 1.9, 0.5],
[16, 3.2, 2.9, 4.2, 1.8, 2.0, 0.5],
[17, 3.3, 3.1, 3.9, 2.0, 2.1, 0.6],
[18, 3.1, 3.7, 3.8, 2.1, 1.9, 0.7],
[19, 2.9, 3.5, 4.3, 2.5, 1.8, 0.8],
[20, 2.8, 3.4, 4.1, 2.7, 2.0, 0.9],
[21, 2.7, 3.8, 4.0, 2.9, 2.1, 1.0],
[22, 3.1, 4.3, 3.7, 3.0, 1.9, 0.8],
[23, 3.4, 3.9, 3.5, 2.7, 1.9, 0.8],
[24, 3.9, 3.5, 3.4, 2.6, 1.8, 0.7],
[25, 3.7, 3.2, 3.4, 2.8, 2.1, 0.9],
[26, 3.8, 3.5, 3.9, 3.0, 2.0, 0.9],
[27, 4.0, 4.0, 3.7, 3.2, 1.9, 1.0],
[28, 3.9, 4.5, 3.5, 2.9, 1.8, 1.0],
[29, 3.7, 4.0, 3.2, 2.7, 1.8, 1.1],
]}
options={{
chart: {
// title: 'Daily Active Users per domain',
// subtitle: 'in thousands, for the Month April, 2021',
},
}}
rootProps={{ 'data-testid': '3' }}
/>
</div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6">
                    <div className="card mb-4">
                        <div className="card-header">
                            <i className="fas fa-chart-area mr-1"></i>
                            Total Users in AI
                        </div>
                        <div className="card-body">
                        <Chart
width={'500px'}
height={'300px'}
chartType="PieChart"
loader={<div>Loading Chart</div>}
data={[
['Course', 'Users'],
['Machine Learning', 11],
['Deep Learning', 5],
['Basics of Python', 20],
['Basics of R', 7],
['Data Visualization', 15],
]}
options={{
// title: 'Total users in AI',
// Just add this option
is3D: true,
}}
rootProps={{ 'data-testid': '2' }}
/>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="card mb-4">
                        <div className="card-header">
                            <i className="fas fa-chart-bar mr-1"></i>
                            Total Users in Web Development
                        </div>
                        <div className="card-body">
                        <Chart
width={'500px'}
height={'300px'}
chartType="PieChart"
loader={<div>Loading Chart</div>}
data={[
['Course', 'Users'],
['HTML & CSS', 11],
['Complete JS', 20],
['Angular', 7],
['React JS', 15],
]}
options={{
// title: 'Total users in Web Development',
// Just add this option
is3D: true,
}}
rootProps={{ 'data-testid': '2' }}
/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-6">
                    <div className="card mb-4">
                        <div className="card-header">
                            <i className="fas fa-chart-area mr-1"></i>
                            Total Users in Android
                        </div>
                        <div className="card-body">
                        <Chart
width={'500px'}
height={'300px'}
chartType="PieChart"
loader={<div>Loading Chart</div>}
data={[
['Course', 'Users'],
['Advance Android', 11],
['Android using Kotlin', 5],
['Complete JAVA', 30],
['Basics of Kotlin', 7],
['Android using JAVA', 15],
]}
options={{
// title: 'Total users in Android',
// Just add this option
is3D: true,
}}
rootProps={{ 'data-testid': '2' }}
/>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="card mb-4">
                        <div className="card-header">
                            <i className="fas fa-chart-bar mr-1"></i>
                            Total Users in IOT
                        </div>
                        <div className="card-body">
                        <Chart
width={'500px'}
height={'300px'}
chartType="PieChart"
loader={<div>Loading Chart</div>}
data={[
['Course', 'Users'],
['Introduction to IOT', 15],
['Embeded Systems', 5],
['Industrial IOT', 11],
]}
options={{
// title: 'Total users in IOT',
// Just add this option
is3D: true,
}}
rootProps={{ 'data-testid': '2' }}
/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        {/* <div className="encircle bounce animated">
        <div className="arrow"></div>
        
        </div> */}

        <hr/>
    
     
</>
    )
}

export default Insights;
