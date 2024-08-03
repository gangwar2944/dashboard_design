import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { EChartsOption } from 'echarts';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

interface ChartData {
  date: string;
  value: number;
}

export interface DailyActivityDataPropsI {
  chartData: ChartData[];
}

const ChartContainer = styled('div')(() => ({
  width: '100%',
  height: '100%',
  maxWidth: '100%',
}));

const StyledReactEcharts = styled(ReactEcharts)(() => ({
  width: '100%',
  height: '100%',
  maxWidth: '100%',
  borderRadius: '0 0 10px 10px',
}));

function DailyActivityData({ chartData }: DailyActivityDataPropsI): JSX.Element {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down('sm'));
  const xValue: string[] | undefined = chartData?.map((item: ChartData) => item.date);
  const yValue: number[] | undefined = chartData?.map((item: ChartData) => item.value);

  const option1: EChartsOption = {
    grid: {
      left: isSmallDevice ? 10 : 0,
      right: isSmallDevice ? 10 : 0,
      top: isSmallDevice ? 10 : 15,
      bottom: isSmallDevice ? 10 : 0,
      containLabel: true,
      height: isSmallDevice ? '150px' : '165px',
      borderWidth: 5,
      borderColor: theme.palette.grey[100],
    },
    legend: {
      bottom: isSmallDevice ? 0 : 3,
      left: 'center',
    },
    xAxis: {
      data: xValue,
      type: 'category',
      axisLabel: {
        fontFamily: 'Segoe UI',
        fontStyle: 'normal',
        fontSize: isSmallDevice ? 10 : 13,
        fontWeight: 'normal',
        color: theme.palette.text.primary,
      },
      nameTextStyle: {
        fontFamily: 'Segoe UI',
        fontStyle: 'normal',
        fontSize: isSmallDevice ? 10 : 13,
        fontWeight: 'normal',
        color: theme.palette.text.primary,
      },
      axisLine: {
        show: true,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: theme.palette.grey[100],
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: theme.palette.text.primary,
          type: 'solid',
          width: 1,
        },
      },
      nameLocation: 'middle',
    },
    yAxis: {
      type: 'value',
      position: 'left',
      axisLine: {
        show: true,
      },
      splitNumber: 3,
      splitLine: {
        show: true,
        lineStyle: {
          color: theme.palette.grey[100],
        },
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: theme.palette.text.primary,
          type: 'solid',
          width: 1,
        },
      },
      axisLabel: {
        inside: false,
        fontFamily: 'Segoe UI',
        fontStyle: 'normal',
        fontSize: isSmallDevice ? 10 : 13,
        fontWeight: 'normal',
        color: theme.palette.text.primary,
      },
      nameLocation: 'middle',
      nameTextStyle: {
        fontSize: isSmallDevice ? 10 : 13,
        color: theme.palette.text.primary,
        align: 'left',
      },
    },
    series: [
      {
        data: yValue,
        animation: false,
        type: 'bar',
        label: {
          show: true,
          position: 'top',
          color: theme.palette.text.primary,
          fontFamily: 'Segoe UI',
          fontStyle: 'normal',
          fontSize: isSmallDevice ? 9 : 11,
          opacity: 100,
        },
        itemStyle: {
          borderRadius: [5, 5, 0, 0],
        },
      },
    ],
  };

  return (
    <ChartContainer>
      <StyledReactEcharts option={option1}/>
    </ChartContainer>
  );
}

export default DailyActivityData;
