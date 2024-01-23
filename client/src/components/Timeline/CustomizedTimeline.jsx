import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import "./CustomizedTimeline.css";
export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          {/* Birth */}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <img src="https://img.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/articles/health_tools/fetal_development_slideshow/getty_rm_photo_of_4_week_fetus.jpg?resize=652px:*&output-quality=100"
              width={50} height={50} style={{"borderRadius":"50%"}}
            />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            <b>Birth</b>
          </Typography>
          <Typography>BCG, Hep B1, OPV</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          {/* 10:00 am */}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
          <img src="https://img.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/articles/health_tools/fetal_development_slideshow/phototake_photo_of_8_week_fetus.jpg?resize=652px:*&output-quality=100"
              width={50} height={50} style={{"borderRadius":"50%"}}/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            <b>6 Weeks</b>
          </Typography>
          <Typography>DTwP/DTaP1, Hib-1, IPV-1, Hep B2, PCV 1, Rota- 1</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
          <img src="https://img.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/articles/health_tools/fetal_development_slideshow/phototake_photo_of_12_week_fetus.jpg?resize=652px:*&output-quality=100"
              width={50} height={50} style={{"borderRadius":"50%"}}/>
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            <b>10 Weeks</b>
          </Typography>
          <Typography>DTwP/DTaP2, Hib-2, IPV-2, Hep B3, PCV 2, Rota- 3</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
          <img src="https://img.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/articles/health_tools/fetal_development_slideshow/PRinc_photo_of_fetus_at_16_weeks.jpg?resize=652px:*&output-quality=100"
              width={50} height={50} style={{"borderRadius":"50%"}}/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            <b>14 Weeks</b>
          </Typography>
          <Typography>DTwP/DTaP, Hib-3, IPV-3, Hep B4, PCV 3, Rota- 3*</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
          <img src="https://img.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/articles/health_tools/fetal_development_slideshow/nilsson_rm_photo_of_20_week_fetus.jpg?resize=652px:*&output-quality=100"
              width={50} height={50} style={{"borderRadius":"50%"}}/>
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            <b>6 Months</b>
          </Typography>
          <Typography>Influenza-1</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
          <img src="https://img.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/articles/health_tools/fetal_development_slideshow/phototake_photo_ultrasound_24_weeks.jpg?resize=652px:*&output-quality=100"
              width={50} height={50} style={{"borderRadius":"50%"}}/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            <b>7 Months</b>
          </Typography>
          <Typography>Influenza-2</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
          <img src="https://img.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/articles/health_tools/fetal_development_slideshow/nilsson_rm_photo_36_week_fetus.jpg?resize=652px:*&output-quality=100"
              width={50} height={50} style={{"borderRadius":"50%"}}/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            <b>6 - 9 Months</b>
          </Typography>
          <Typography>Typhoid Conjugate Vaccine</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
          <img src="https://img.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/articles/health_tools/fetal_development_slideshow/phototake_newborn_at_birth.jpg?resize=652px:*&output-quality=100"
              width={50} height={50} style={{"borderRadius":"50%"}}/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            <b>9 Months</b>
          </Typography>
          <Typography>MMR 1(Mumps, measles, Rubella)</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
          <img src="https://www.mother.ly/wp-content/uploads/2021/10/origin-7591.jpg"
              width={50} height={50} style={{"borderRadius":"50%"}}/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            <b>12 Months</b>
          </Typography>
          <Typography>Hepatitis A-1</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
          <img src="https://cdn-icons-png.flaticon.com/512/5038/5038480.png"
              width={40} height={40} style={{"borderRadius":"50%"}}/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            <b>12 - 15 Months</b>
          </Typography>
          <Typography>PCV Booster</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
          <img src="https://cdn-icons-png.flaticon.com/512/5038/5038480.png"
              width={40} height={40} style={{"borderRadius":"50%"}}/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            <b>15 Months</b>
          </Typography>
          <Typography>MMR - 2, Varicella</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
          <img src="https://cdn-icons-png.flaticon.com/512/5038/5038480.png"
              width={40} height={40} style={{"borderRadius":"50%"}}/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            <b>16 - 18 Months</b>
          </Typography>
          <Typography>DTwP/DTaP, Hib, IPV</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
          <img src="https://cdn-icons-png.flaticon.com/512/5038/5038480.png"
              width={40} height={40} style={{"borderRadius":"50%"}}/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            <b>18 - 19 Months</b>
          </Typography>
          <Typography>Hepatitis A- 2** , Varicella 2</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
          <img src="https://cdn-icons-png.flaticon.com/512/5038/5038480.png"
              width={40} height={40} style={{"borderRadius":"50%"}}/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            <b>4 - 6 Years</b>
          </Typography>
          <Typography>DTwP,/DTaP, Hib, IPV</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
          <img src="https://cdn-icons-png.flaticon.com/512/5038/5038480.png"
              width={40} height={40} style={{"borderRadius":"50%"}}/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            <b>9 - 5 Years</b>
          </Typography>
          <Typography>HPV (2 doses)</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
          <img src="https://cdn-icons-png.flaticon.com/512/5038/5038480.png"
              width={40} height={40} style={{"borderRadius":"50%"}}/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            <b>10 - 12 Years</b>
          </Typography>
          <Typography>Tdap/Td</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
          <img src="https://cdn-icons-png.flaticon.com/512/5038/5038480.png"
              width={40} height={40} style={{"borderRadius":"50%"}}/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            <b>13th, 14th, 15th, 16th Year</b>
          </Typography>
          <Typography>Anuual Influenza Vaccine</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
