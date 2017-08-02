import React, { Component } from 'react';

class Table extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <td>Элемент 1</td>
                        <td>Элемент 2</td>
                        <td>Элемент 3</td>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                </tfoot>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Table;