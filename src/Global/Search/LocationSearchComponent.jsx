import React, { Component } from 'react';
import './styles.css';

import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';

class LocationSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: ""
        }
    }
    handleChange = address => { this.setState({ address }) }
    handleSelect = address => { geocodeByAddress(address).then(results => console.log('Success', results[0], "address", address)).catch(error => console.error('Error', error)) };

    render() {
        return (
            <PlacesAutocomplete value={this.state.address} onChange={this.handleChange} onSelect={this.handleSelect}>{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div className="search-box">
                    <input {...getInputProps({
                        placeholder: 'Where should we go?',
                        className: 'locationsearch',
                    })}></input>
                    <a href="" className="search-btn"><i class="fa fa-search"></i></a>

                    <div className='autocomplete-dropdown-container'>{loading && <div>Loading...</div>}
                        {suggestions.map(suggestion => {
                            const className = suggestion.active
                                ? 'suggestion-item--action'
                                : 'suggestion-item';

                            const style = suggestion.active
                                ? { background: '#861C58', cursor: 'pointer', padding: '5px', width: '100%' }
                                : { background: '#bf268f', cursor: 'pointer', padding: '5px', width: '100%' };
                            return (
                                <div {...getSuggestionItemProps(suggestion, {
                                    className, style
                                })}><span>{suggestion.description}</span></div>
                            );
                        })}
                    </div>
                </div>
            )}
            </PlacesAutocomplete>
        );
    }
}

export default LocationSearch;