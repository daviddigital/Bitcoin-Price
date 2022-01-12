import React from 'react'
import { useState } from 'react'

// Todo, use v1/bpi/supported-currencies.json to get list of currencies. Iterate through or map to options. 

export default function CurrencySelector( {currency, setCurrency} ) {


    return (
        <select value={currency} onChange={ e => setCurrency(e.target.value)}>
            <option value="AUD"> AUD </option>
            <option value="USD"> USD </option>
            <option value="EUR"> EUR </option>
        </select>
    )
}
