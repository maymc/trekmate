import React, { Component } from 'react';
import './styles.css';

import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

class LocationSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: null,
        }
    }
    handleChange = address => { this.setState({ address }) }
    handleSelect = address => { geocodeByAddress(address).then(results => getLatLng(results[0])).then(latLng => console.log('Success', latLng)).catch(error => console.error('Error', error)) };

    render() {
        return (
            <PlacesAutocomplete value={this.state.address} onChange={this.handleChange} onSelect={this.handleSelect}>{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                    <input {...getInputProps({
                        placeholder: 'Where should we go?',
                        classname: 'locationsearch',
                    })}></input>
                    <div className='autocomplete-dropdown-container'>{loading && <div>Loading...</div>}
                        {suggestions.map(suggestion => {
                            const classname = suggestion.active
                                ? 'suggestion-item--action'
                                : 'suggestion-item';

                            const style = suggestion.active
                                ? { background: '#fafafa', cursor: 'pointer' }
                                : { background: '#ffffff', cursor: 'pointer' };
                            return (
                                <div {...getSuggestionItemProps(suggestion, {
                                    classname, style
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