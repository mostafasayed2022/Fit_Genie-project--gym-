import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './home.css';


export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
    <div className='cont'>
        <div className='accordio-container'>
            <div>
                <Accordion className='card'>
                    <AccordionSummary
                        expandIcon={<ArrowDownwardIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography className='text_accordion'>How do I choose the right routine for my goals?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='card-content'>
                            Determine what you want to achieve, whether it's weight loss, muscle gain,
                            improved cardiovascular fitness, or overall health and wellness.
                            Choose a routine that matches your current fitness level. If you're a beginner,
                            start with a program designed for beginners to avoid injury and build a solid foundation.
                            Pay attention to how your body responds to the routine. If you experience pain or discomfort,
                            adjust the routine or seek guidance from a fitness professional.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion className='card'>
                    <AccordionSummary
                        expandIcon={<ArrowDownwardIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography className='text_accordion'>Should I bulk (gain weight) or cut (lose weight)?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='card-content'>
                            Building muscle mass and strength.
                            Eat at a calorie surplus (consume more calories than you burn).
                            Focus on a balanced diet with higher protein intake to support muscle growth.
                            Include strength training to stimulate muscle growth.<br />
                            Reduce body fat and improve muscle definition.
                            Eat at a calorie deficit (consume fewer calories than you burn).
                            Maintain adequate protein intake to preserve muscle mass.
                            Combine cardio and strength training to maintain muscle while burning fat.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion className='card'>
                    <AccordionSummary
                        expandIcon={<ArrowDownwardIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography className='text_accordion'>Can I lose fat and build muscle at the same time?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='card-content'>
                            To achieve body recomposition, you need to maintain a slight caloric deficit
                            to lose fat while consuming enough protein and nutrients to support muscle growth.
                            Adequate protein intake is crucial for preserving and building muscle mass while in a caloric deficit.
                            Aim for around 1.2 to 2.2 grams of protein per kilogram of body weight per day.
                            Incorporate resistance training into your routine to stimulate muscle growth.
                            Focus on compound exercises that target multiple muscle groups.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>


            <div>
                <Accordion className='card'>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography className='text_accordion'>How do I know how many calories to eat?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='card-content'>
                            This is the number of calories your body needs to maintain basic functions at rest.
                            There are several formulas to estimate BMR, such as the Harris-Benedict equation or the Mifflin-St Jeor equation,
                            Multiply your BMR by an activity factor to estimate your TDEE.
                            The activity factor ranges from 1.2 (sedentary) to 1.9 (very active).
                        </Typography>
                    </AccordionDetails>

                </Accordion>


                <Accordion className='card'>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography className='text_accordion'>Is it true that eating too much protein at once is a waste?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='card-content'>
                            Research suggests that consuming around 20-40 grams of high-quality protein per meal is sufficient to maximize muscle protein synthesis in most individuals.
                            Consuming more protein than your body can use for
                            muscle protein synthesis at one time may result in the excess being used for energy or stored as fat.
                        </Typography>
                    </AccordionDetails>

                </Accordion>


                <Accordion className='card'>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography className='text_accordion'>Am I not getting a good workout if I’m not sweating?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='card-content'>
                            The intensity of your workout should align with your fitness goals. For example,
                            if you're aiming to improve cardiovascular fitness, you might focus on activities that elevate your heart rate.
                            The duration of your workout should be appropriate for your fitness level and goals. A longer workout doesn't always mean a better workout.
                            Over time, you should see improvements in your strength, endurance, or other fitness markers.
                            Progression is a sign that your workout routine is effective.
                            Consistently engaging in physical activity is key to seeing results.
                            A single intense workout is less beneficial than a regular, sustainable exercise routine.
                        </Typography>
                    </AccordionDetails>

                </Accordion>
            </div>

        </div>
        </div>
    );
}
