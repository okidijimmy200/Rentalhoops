import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { set } from 'lodash';
import Question from '../../Components/Question/Question';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: '79%',
        margin: '0 auto'

    },
    card: {
        marginBottom: '20px'
    },
    expand: {
        marginLeft: 'auto'
    },
    title: {
        paddingBottom: '24px',
        fontSize: '42px',
        lineHeight: '42px',
        textTransform: 'uppercase',
    },
    qtn: {
      margin:  '20px 50px 0 ',
      color: '#000'
    }, 
    wrapper: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}));



const initialValues = [
    {
        title: 'What is RentalHoops ? ',
        desc: "RentalHoops is a software-powered real estate brokerage that makes it easier for people to buy, sell, and rent apartments. From online search of the most up-to-date and accurate apartment inventory to brokers bonused on member satisfaction, Triplemint's mission is delivering a smarter, simpler, and more personalized real estate experience to people everywhere"
    },
    {
        title: 'Why rental hoops', 
        desc: "Client Focus | Traditional brokerages are agent-focused. At RentalHoops, we put the client first, embracing their unique needs with a real estate experience tailored to their lifestyles. From our agents to our senior leadership, we share a common goal; building enduring relationships with our members, established on a foundation of trust, teamwork, and personal care. Instead of seeing five different apartments with five different agents, we get you connected to one agent who has access to all of the city’s inventory and will customize your search from start to finish. Their commissions are based on customer satisfaction scores, aligning your incentives with your agent’s to ensure you end up in a home you truly love."
    },
    {
        title:"Who should I speak to if I have further questions?",
        desc: "You can always reach out to our Client Success team at hello@rentalhoops.com, or contact your RentalHoops agent directly."
    }
]
export default function QnA() {
    const classes = useStyles();
    const [items, setItems] = useState([]);


    useEffect(() => {
        setItems(initialValues)
    }, [])

 
    return (
        <>
        <div className={classes.root}>
            <Typography className={classes.title}>YOUR QUESTIONS ANSWERED</Typography>
            {items.map((item, i) => {
                return <Card className={classes.card} key={i} >
                        <Question  item={item}/>
                    </Card>
                    
                })}
            </div>
        </>
    )
}
