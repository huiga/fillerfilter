import React, {Component} from 'react'
import { Chart } from "react-google-charts";
class Stats extends Component {
    render() {
        var filler_dictionary = {"like": 0, "basically": 0, "so": 0, "wow": 0, "really": 0, "well": 0, "actually": 0, "seriously": 0,
            "literally": 0, "okay": 0,
        };
        const transcript = this.props.transcript.toLowerCase().split(" ");
        for(var i = 0; i < transcript.length; i++){
            console.log(filler_dictionary[transcript[i]])
            if(filler_dictionary[transcript[i]] != null){
                filler_dictionary[transcript[i]]++;
            }
        }
        var data = []
        for(var key in filler_dictionary){
            if(filler_dictionary[key] != 0)
                data.push([key, filler_dictionary[key]])
        }
        data.unshift(['Filler Words', "Frequency"]);
        return (
            <div>
                <div className="barchart">
                    <Chart chartType="PieChart" style={{paddingLeft: '0%'}} width="80%" height="100%" data={data} 
                    options={{
                        title: "Most Common Filler Words",
                        backgroundColor: "#B7B7CB",
                        chart: {
                        },
                    }}/>
                    <Chart chartType="PieChart" style={{paddingLeft: '0%'}} width="80%" height="100%" data={data} 
                    options={{
                        title: "Most Common Filler Words",
                        backgroundColor: "#B7B7CB",
                        chart: {
                        },
                    }}/>
                </div>
            </div>
        )
    }
}

export default Stats