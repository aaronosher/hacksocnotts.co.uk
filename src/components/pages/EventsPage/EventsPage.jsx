import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isMoment } from 'core/propTypes';

import * as styles from './EventsPage.less';

import { ResponsiveContainer } from '../../Containers';
import EventsPageHeading from './EventsPageHeading';
import { Footer } from '../../Footer';
import EventsPageEvent from './EventsPageEvent';
import backgroundImage from '../../../resources/events.jpg';

const backgroundProp = {
  overlay: 'rgba(0, 0, 0, 0.7)',
  image: backgroundImage,
  halfHeight: true,
};

const eventsPage = (props) => {
  const { events } = props;
  
  return (
    <ResponsiveContainer heading={EventsPageHeading} background={backgroundProp}>
      <div className={styles.eventsContainer}>
        {_.map(sortedEvents, event => <EventsPageEvent event={event} key={event.id} />)}
      </div>
      <Footer />
    </ResponsiveContainer>
  );
}

EventsPage.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    start: isMoment,
    end: isMoment,
    location: PropTypes.string,
    summary: PropTypes.string,
    description: PropTypes.string,
    banner: PropTypes.any,
  })),
};

/* eslint-disable arrow-body-style */
const mapStateToProps = state => ({
  events: state.events.futureItems,
});

const mapDispatchToProps = () => ({});
/* eslint-enable */

export default connect(mapStateToProps, mapDispatchToProps)(EventsPage);
