import React, { Component } from 'react';
import './Add.css';
import { CompactPicker } from 'react-color';


class Add extends Component {
	constructor(props) {
		super(props);
		const ref = this;
		ref.state = {
			picker1: '#fff',
			picker2: '#fff',
            picker3: '#fff',
            picker4: '#fff',
			direction: 'left',
            value: '',
            color: [],
            newColor: [],
		}
        ref.add = ref.add.bind(ref);
        ref.handleChange = ref.handleChange.bind(ref);
        ref.handleSubmit = ref.handleSubmit.bind(ref);
        ref.reset = ref.reset.bind(ref);
	}

	picker1 = (color) => {
    	this.setState({
            picker1: color.hex
        });
  	};

  	picker2 = (color) => {
    	this.setState({ 
            picker2: color.hex
        });
  	};

    picker3 = (color) => {
        this.setState({ 
            picker3: color.hex
        });
    };

    picker4 = (color) => {
        this.setState({ 
            picker4: color.hex
        });
    };

    handleChange(e) {
        const ref = this;
        ref.setState({
            value: e.target.value,
        });
    };

    handleSubmit() {
        const ref = this;
        const name = ref.state.value;
        let color = [];
        if(ref.state.picker3 === '#fff' && ref.state.picker4 === '#fff') {
            color.push(ref.state.picker1, ref.state.picker2)
        } else if(ref.state.picker3 !== '#fff') {
            color.push(ref.state.picker1, ref.state.picker2, ref.state.picker3)
        } if(ref.state.picker4 !== '#fff') {
            color.push(ref.state.picker1, ref.state.picker2, ref.state.picker3, ref.state.picker4);
        }
        ref.add(name, color);
        ref.reset()
    };

    add(colorName, colorCode) {
        const ref = this;
        let colors = {};
        colors.name = colorName;
        colors.color = colorCode;
        const newColor = [];
        newColor.push(colors)
        ref.setState({
            newColor: newColor
        })
        console.log(newColor)
    };

    reset() {
        const ref = this;
        ref.setState = {
            picker1: '#fff',
            picker2: '#fff',
            picker3: '#fff',
            picker4: '#fff',
            direction: 'left',
            value: '',
            color: [],
            newColor: [],
        }
    };

    render() {
        const ref = this;
        let x = ['#FFEBEE', '#FCE4EC', '#F3E5F5', '#EDE7F6', '#E8EAF6', '#E3F2FD', '#E1F5FE', '#E0F7FA', '#E0F2F1', '#E8F5E9', '#F1F8E9', '#F9FBE7', '#FFFDE7', '#FFF8E1', '#FFF3E0', '#FBE9E7', '#EFEBE9', '#FAFAFA', '#ECEFF1', '#FFCDD2', '#F8BBD0', '#E1BEE7', '#D1C4E9', '#C5CAE9', '#BBDEFB', '#B3E5FC', '#B2EBF2', '#B2DFDB', '#C8E6C9', '#DCEDC8', '#F0F4C3', '#FFF9C4', '#FFECB3', '#FFE0B2', '#FFCCBC', '#D7CCC8', '#F5F5F5', '#CFD8DC', '#EF9A9A', '#F48FB1', '#CE93D8', '#B39DDB', '#9FA8DA', '#90CAF9', '#81D4FA', '#80DEEA', '#80CBC4', '#A5D6A7', '#C5E1A5', '#E6EE9C', '#FFF59D', '#FFE082', '#FFCC80', '#FFAB91', '#BCAAA4', '#EEEEEE', '#B0BEC5', '#E57373', '#F06292', '#BA68C8', '#9575CD', '#7986CB', '#64B5F6', '#4FC3F7', '#4DD0E1', '#4DB6AC', '#81C784', '#AED581', '#DCE775', '#FFF176', '#FFD54F', '#FFB74D', '#FF8A65', '#A1887F', '#E0E0E0', '#90A4AE', '#EF5350', '#EC407A', '#AB47BC', '#7E57C2', '#5C6BC0', '#42A5F5', '#29B6F6', '#26C6DA', '#26A69A', '#66BB6A', '#9CCC65', '#D4E157', '#FFEE58', '#FFCA28', '#FFA726', '#FF7043', '#8D6E63', '#BDBDBD', '#78909C', '#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722', '#795548', '#9E9E9E', '#607D8B', '#E53935', '#D81B60', '#8E24AA', '#5E35B1', '#3949AB', '#1E88E5', '#039BE5', '#00ACC1', '#00897B', '#43A047', '#7CB342', '#C0CA33', '#FDD835', '#FFB300', '#FB8C00', '#F4511E', '#6D4C41', '#757575', '#546E7A', '#D32F2F', '#C2185B', '#7B1FA2', '#512DA8', '#303F9F', '#1976D2', '#0288D1', '#0097A7', '#00796B', '#388E3C', '#689F38', '#AFB42B', '#FBC02D', '#FFA000', '#F57C00', '#E64A19', '#5D4037', '#616161', '#455A64', '#C62828', '#AD1457', '#6A1B9A', '#4527A0', '#283593', '#1565C0', '#0277BD', '#00838F', '#00695C', '#2E7D32', '#558B2F', '#9E9D24', '#F9A825', '#FF8F00', '#EF6C00', '#D84315', '#4E342E', '#424242', '#37474F', '#B71C1C', '#880E4F', '#4A148C', '#311B92', '#1A237E', '#0D47A1', '#01579B', '#006064', '#004D40', '#1B5E20', '#33691E', '#827717', '#F57F17', '#FF6F00', '#E65100', '#BF360C', '#3E2723', '#212121', '#263238'];
        let color = x.reverse();
        let y = ''
        if(ref.state.picker3 === '#fff' && ref.state.picker4 === '#fff') {
            y = `${ref.state.picker1}, ${ref.state.picker2}`
        } else if(ref.state.picker3 !== '#fff') {
            y = `${ref.state.picker1}, ${ref.state.picker2}, ${ref.state.picker3}`
        } if(ref.state.picker4 !== '#fff') {
            y = `${ref.state.picker1}, ${ref.state.picker2}, ${ref.state.picker3}, ${ref.state.picker4}`
        }
        let style = {
            background: "linear-gradient(to left, " + y + ")",
        }   
        console.log(style);
        return (
            <div className="Add">
                <div className="container-fluid">
                	<div className="row">
                		<div className="col-12">
                			<div className="card" style={style}></div>
                		</div>
                	</div>
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-lg-6 col-xl-6">
                            <div className="picker1 picker">
                                <CompactPicker colors={color} color={ this.state.picker1 } onChangeComplete={ this.picker1 } />
                            </div>
                        </div>
                        <div className="col-md-12 col-sm-12 col-lg-6 col-xl-6">
                            <div className="picker2 picker">
                                <CompactPicker colors={color} color={ this.state.picker2 } onChangeComplete={ this.picker2 } />
                            </div>
                        </div>
                        <div className="col-md-12 col-sm-12 col-lg-6 col-xl-6">
                            <div className="picker3 picker">
                                <CompactPicker colors={color} color={ this.state.picker3 } onChangeComplete={ this.picker3 } />
                            </div>
                        </div>
                        <div className="col-md-12 col-sm-12 col-lg-6 col-xl-6">
                            <div className="picker4 picker">
                                <CompactPicker colors={color} color={ this.state.picker4 } onChangeComplete={ this.picker4 } />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="color-name">
                    <input type="text" placeholder="Gradient Name......" value={ref.state.value} onChange={ref.handleChange}/>
                    <button onClick={ref.handleSubmit} type="submit">Submit</button>
                </div>
            </div>
        );
    }
}

export default Add;