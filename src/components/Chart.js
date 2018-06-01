import React, {Component} from 'react';
import {HorizontalBar} from 'react-chartjs-2';

var baseUrl = "https://cdn.rawgit.com/konpa/devicon/master/";
  
var h;
var w;

const data = {
   

    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  
    datasets: [
  
      {
  
        label: 'My First dataset',
  
        backgroundColor: 'rgba(255,99,132,0.2)',
  
        borderColor: 'rgba(255,99,132,1)',
  
        borderWidth: 1,
  
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
  
        hoverBorderColor: 'rgba(255,99,132,1)',
  
        data: [1, 2, 3, 5, 4, 2, 1],
        strokeColor : "#48A4D1"
			
  
      }
      
  
    ],
    
  
  };

  

class Chart extends Component{
    constructor(props) {
        super(props);
        this.state = {height: props.height};
      }
    
      componentWillMount(){
        this.setState({height: window.innerHeight + 'px'});
      }

 
      
      
    render(){

        if(window.innerWidth==375){
            h=375;
             
        }
        else{
            h = 50;
            // alert(window.innerWidth)
        }

        return (
            <div className="Chart">
            <HorizontalBar
                data={data}              
                    width={h}
                    height={h}
                options={{

                   

                    legend: {
                        display: false,
                        labels: {
                            fontColor: 'rgb(255, 99, 132)'
                        }
                    },
                    
                    
                    scales: {
                        yAxes: [{
                            categoryPercentage: 1.0,
                            barPercentage: .9,
                            gridLines: {
                                display: false ,
                                color: "#FFFFFF"
                              },

                        }],
                      
                        xAxes: [{
                           
                           
                            ticks: {                              
                                    // Include a dollar sign in the ticks
                                    callback: function(value, index, values) {
                                        switch(index) {
                                            case 0:
                                                
                                                return window.innerWidth;
                                                break;
                                            case 1:
                                                return "B";
                                                break;
                                            case 2:
                                                return "P";
                                                break;
                                            case 3:
                                                return "D";
                                                break;
                                            case 4:
                                                return "U"
                                                break;
                                            case 5:
                                                return "E"
                                                break;
                                            default:
                                                return "";
                                        }
                                    },
                                    
                                autoskip: false,
                                max: 5,
                                min: 0,
                               
                                maxTicksLimit: 6,
                                beginAtZero:true
                            }
                        }]
                    },
                    maintainAspectRation: true,
                  
                }}
            />}
            </div>
        )

    }
}

export default Chart;