import React from 'react'
import AppointmentCard from '../components/AppointmentCard'
import './Appointments.css'

export default function Appointments() {
    
  return (
    <div className="appointmentsDiv">
    <div class="uk-flex uk-flex-wrap uk-child-width-1-1 uk-child-width-1-2@l">
    <div class="uk-padding-large">
      <h1 class="uk-h1 uk-text-center">Search OR filter</h1>
      <div uk-filter="target: .filter" class="uk-width-1-1 filter-main">
        <div class="uk-flex uk-flex-middle uk-flex-column uk-width-1-1 uk-margin-small-bottom filter-options-container">
          <div class="uk-flex uk-flex-right uk-flex-last uk-flex-1 uk-margin-medium filter-search-container">
            <form onsubmit="return false;" class="uk-subnav uk-subnav-pill uk-search uk-search-default uk-width-medium">
              <span class="uk-search-icon-flip" uk-search-icon></span>
              <input onkeyup="filterSearch();" uk-filter-control="" class="uk-search-input" type="search" placeholder="Search..." />
            </form>
          </div>
          <div class="uk-flex uk-flex-center uk-flex-left@s uk-grid-small uk-grid-divider uk-child-width-auto uk-margin-small" uk-grid>
            <div>
              <ul class="uk-subnav uk-subnav-pill" uk-margin>
                <li class="uk-active" uk-filter-control="group: tag"><a href="#">All</a></li>
              </ul>
            </div>

            <div>
              <ul class="uk-flex uk-flex-center uk-flex-left@s uk-subnav uk-subnav-pill">
                <li onClick="{resetSearchBar};" uk-filter-control="filter: [tag='f1'];"><a href="#">Filter 1</a></li>
                <li onClick="{resetSearchBar};" uk-filter-control="filter: [tag='f2'];"><a href="#">Filter 2</a></li>
                <li onClick="{resetSearchBar};" uk-filter-control="filter: [tag='f3'];"><a href="#">Filter 3</a></li>
                <li onClick="{resetSearchBar};" uk-filter-control="filter: [tag='f4'];"><a href="#">Filter 4</a></li>
                <li onClick="{resetSearchBar};" uk-filter-control="filter: [tag='f5'];"><a href="#">Filter 5</a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
      <AppointmentCard />
    </div>
  )
}
