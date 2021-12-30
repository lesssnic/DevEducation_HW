// @ts-ignore
import Chart from "chart.js/auto";
import {color, TREE} from "./constants";
import {TAnswer, TGrid} from "./types";

let chart;
export const renderLine = (result:Array<TAnswer>, type:string):void => {
    const keys: string[] = Object.entries(result[0].data?.month || result[0].data?.histogram).sort((a,b) => {
        if(a[0] > b[0]) return 1;
        if(a[0] < b[0]) return -1;
        if(a[0] === b[0]) return 0;
    }).map(elem => elem[0]);
    const data = result.map(
        ({data: {month, histogram}, config: {params: {category}}}):TGrid => {
            const values:[string,unknown][] = Object.entries(month ?? histogram).sort((a,b) => {
                if(a[0] > b[0]) return 1;
                if(a[0] < b[0]) return -1;
                if(a[0] === b[0]) return 0;
            });
            return {
                label: `# ${type}, ${category}`,
                data: values.map(elem => elem[1]),
                backgroundColor: color.backgroundColor,
                borderColor: color.borderColor,
                borderWidth: 1
            }
        });
    if(!chart) {
        chart = new Chart(TREE.ctx, {
            type: 'line',
            data: {
                labels: keys,
                datasets: data
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    } else {
        chart.data.labels = keys;
        chart.data.datasets = data;
        chart.update();
    }
};

