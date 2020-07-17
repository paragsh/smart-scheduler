import React, {Component} from 'react'
// import withDragDropContext from './withDragDropContext';
import Scheduler, {SchedulerData, ViewTypes} from 'react-big-scheduler'
import DemoData from "./DemoData";
import {DragDropContext} from "react-dnd";
import HTML5Backend from 'react-dnd-html5-backend'

class CustomScheduler extends Component {
  constructor(props){
    super(props);

    let schedulerData = new SchedulerData('2017-12-18', ViewTypes.Day);
    schedulerData.localeMoment.locale('en');
    schedulerData.setResources(DemoData.resources);
    schedulerData.setEvents(DemoData.events);
    this.state = {
      viewModel: schedulerData
    }
  }
  render() {
    const {viewModel} = this.state;
    console.log(viewModel);
    return (
      <div>
          <Scheduler schedulerData={viewModel}
                     prevClick={this.prevClick}
                     nextClick={this.nextClick}
                     onSelectDate={this.onSelectDate}
                     onViewChange={this.onViewChange}
                     eventItemClick={this.eventClicked}
                     viewEventClick={this.ops1}
                     viewEventText="Ops 1"
                     viewEvent2Text="Ops 2"
                     viewEvent2Click={this.ops2}
                     toggleExpandFunc={this.toggleExpandFunc}
          />
      </div>
    )
  }

  prevClick = (schedulerData)=> {
    schedulerData.prev();
    schedulerData.setEvents(DemoData.events);
    this.setState({
      viewModel: schedulerData
    })
  }

  nextClick = (schedulerData)=> {
    schedulerData.next();
    schedulerData.setEvents(DemoData.events);
    this.setState({
      viewModel: schedulerData
    })
  }

  onViewChange = (schedulerData, view) => {
    schedulerData.setViewType(view.viewType, view.showAgenda, view.isEventPerspective);
    schedulerData.setEvents(DemoData.events);
    this.setState({
      viewModel: schedulerData
    })
  }

  onSelectDate = (schedulerData, date) => {
    schedulerData.setDate(date);
    schedulerData.setEvents(DemoData.events);
    this.setState({
      viewModel: schedulerData
    })
  }

  eventClicked = (schedulerData, event) => {
    alert(`You just clicked an event: {id: ${event.id}, title: ${event.title}}`);
  };

  ops1 = (schedulerData, event) => {
    alert(`You just executed ops1 to event: {id: ${event.id}, title: ${event.title}}`);
  };

  ops2 = (schedulerData, event) => {
    alert(`You just executed ops2 to event: {id: ${event.id}, title: ${event.title}}`);
  };

  toggleExpandFunc = (schedulerData, slotId) => {
    schedulerData.toggleExpandStatus(slotId);
    this.setState({
      viewModel: schedulerData
    });
  }
}
export default DragDropContext(HTML5Backend)(CustomScheduler);
