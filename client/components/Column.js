import React from 'react'
import { Dimensions, TouchableOpacity, Image, Text } from 'react-native'
import { colors } from '../lib/Settings'

class Column extends React.Component {
    state = { isWinnerColumn: false }

    componentDidUpdate(prevProps) {
        if (prevProps.winnerColumns !== this.props.winnerColumns) this.checkIfWinnerColumn()
    }

    checkIfWinnerColumn = () => {
        const { winnerColumns, num } = this.props,
        { isWinnerColumn } = this.state

        if ((winnerColumns[0] === num || winnerColumns[1] === num || winnerColumns[2] === num ) && !isWinnerColumn) this.setState({ isWinnerColumn: true })
        else if (winnerColumns) this.setState({ isWinnerColumn: false })
    }

    getStyles = (isWinnerColumn) => {
        return {
            column: {
                maxWidth: Dimensions.get('window').height * 0.1, 
                maxHeight: Dimensions.get('window').height * 0.1, 
                width: Dimensions.get('window').width * 0.22,
                height: Dimensions.get('window').width * 0.22,
                backgroundColor: colors.main,
                borderRadius: 10,
                borderWidth: isWinnerColumn ? 8 : 2,
                borderColor: isWinnerColumn ? colors.mainDark : 'white',
                margin: 10
            },
            image: {
                flex: 1,
                height: '100%',
                width: '100%',
            }
        }
    }

    render() {
        let path 
        const { fieldType, num, action, disabled } = this.props
        const { isWinnerColumn } = this.state
        const styles = this.getStyles(isWinnerColumn)

        if(isWinnerColumn) console.log(num)

        if (fieldType === 'o') path = require(`../assets/images/o.png`) 
        if (fieldType === 'x') path = require(`../assets/images/x.png`)

        return <TouchableOpacity disabled={disabled} style={styles.column} onPress={() => action(num)}>
                {fieldType !== '' ? <Image style={styles.image} source={path} /> : null}
            </TouchableOpacity>
    }
}

export default Column