import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
        paper: {
            // padding: theme.spacing(2),
            height: '355px',
            width: '400px',
            textAlign: 'center',
            color: theme.palette.text.secondary,
            display: 'flex',
            flexDirection: 'column',
            border: 'none',
            boxShadow: '0px 0px 0px 0px',
            margin: 'auto'
          },
          card: {
            height: '355px',
            width: '100%',
            margin: '0',
            padding: '0',
            border: '1px solid #d8d8d8',
            backgroundColor: '#fff',
            backgroundRepeat: 'repeat',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            cursor: 'pointer',
            position: 'relative',
            boxShadow: '0px 0px 0px 0px'
          },
          media:{
            width:' 100%',
            height: '100%',
            backgroundColor: '#DCDCDC',
            top:' 0',
            zIndex:' 0'
          },
          data: {
            fontFamily: 'ConduitMdITCTTMedium',
            textAlign: 'left',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            backgroundColor: '#fff',
          },
          location: {
            order: '1',
            marginBottom: '5px',
            backgroundColor: '#DCDCDC',
            width: '100px',
            height: '20px'
          },
          neighbourhood: {
            fontSize:' 20px',
            lineHeight: '20px',
            whiteSpace: 'normal',
            color: '#404040'
          },
          Text: {
            top: '247px',
            height:' 30%',
            width: '100%',
            position: 'absolute',
            backgroundColor: '#fff'
          },
          arrowLeft: {
            borderRadius: '3px',
            padding: '16px 32px',
            fontFamily: 'OpenSans-semibold',
            fontSize: '18px',
            border: 'none',
            cursor: 'pointer',
            height: '70%',
            position: 'absolute',
            left: '3px',
            top: '2px'
          },
          arrowWrap: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            backgroundColor: 'transparent',
            position: 'absolute',
            right: '0',
            left: '0',
            top: '0',
            bottom: '0'
          },
          arrowRight: {
            borderRadius: '3px',
            padding: '16px 32px',
            fontFamily: 'OpenSans-semibold',
            fontSize: '18px',
            border: 'none',
            cursor: 'pointer',
            height: '70%',
            position: 'absolute',
            top: '2px',
            right: '2px'
          },
          hood: {
            fontSize: '14px',
            lineHeight: '18px',
            color: '#767676'
          },
          listInfo: {
            order: '2',
            fontSize: '0',
            backgroundColor: '#DCDCDC',
            height: '20px',
            marginBottom: '5px'
          },
          price: {
            fontSize: '15px',
            fontWeight: 'bold',
            lineHeight: '20px',
            color:' #404040',
            display:'inline-block'
          },
          summary: {
            fontSize: '14px',
            lineHeight: '14px',
            color: '#767676'
          }
    }
)) 

export {
    useStyles
}