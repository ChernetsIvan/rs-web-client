import React, {Component} from 'react';

import './BootstrapTest.css';

class BootstrapTest extends Component { 
    render() {

        let spacing = 20;
        return (
            <div>
                <div>
                    <h1>Layout</h1>

                    <h2 className="redTextColor">Grid System</h2>

                    <h4>Equal-width</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col card">
                                6 of 12
                            </div>
                            <div className="col card">
                                6 of 12
                            </div>
                        </div>
                        <div className="row">
                            <div className="col card">
                                4 of 12
                            </div>
                            <div className="col card">
                                4 of 12
                            </div>
                            <div className="col card">
                                4 of 12
                            </div>
                        </div>
                    </div>
                    <hr />

                    <h4>Setting one column width</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col card">
                                3 of 12
                            </div>
                            <div className="col-6 card">
                                6 of 12 (wider)
                            </div>
                            <div className="col card">
                                3 of 12
                            </div>
                        </div>
                        <div className="row">
                            <div className="col card">
                                3.5 of 12
                            </div>
                            <div className="col-5 card">
                                5 of 12
                            </div>
                            <div className="col card">
                                3.5 of 12
                            </div>
                        </div>
                    </div>
                    <hr/>

                    <h4>Variable width content</h4>
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col col-lg-2 card">
                                1 of 3
                            </div>
                            <div className="col-12 col-md-auto card">
                                Variable width content
                            </div>
                            <div className="col col-lg-2 card">
                                3 of 3
                            </div>
                        </div>
                        <div className="row">
                            <div className="col card">
                                1 of 3
                            </div>
                            <div className="col-12 col-md-auto card">
                                Variable width content
                            </div>
                            <div className="col col-lg-2 card">
                                3 of 3
                            </div>
                        </div>
                    </div>
                    <hr />

                    <h4>Equal-width multi-row</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col card">col</div>
                            <div className="col card">col</div>
                            <div className="w-100 card"></div>
                            <div className="col card">col</div>
                            <div className="col card">col</div>
                        </div>
                    </div>
                    <hr />
                    
                    <h3>Responsive classes</h3>
                    
                    <h4>All breakpoints</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col card">col</div>
                            <div className="col card">col</div>
                            <div className="col card">col</div>
                            <div className="col card">col</div>
                        </div>
                        <div className="row">
                            <div className="col-8 card">col-8</div>
                            <div className="col-4 card">col-4</div>
                        </div>
                    </div>
                    <hr/>

                    <h4>Stacked to horizontal</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 card">col-sm-8</div>
                            <div className="col-sm-4 card">col-sm-4</div>
                        </div>
                        <div className="row">
                            <div className="col-sm card">col-sm</div>
                            <div className="col-sm card">col-sm</div>
                            <div className="col-sm card">col-sm</div>
                        </div>
                    </div>
                    <hr/>
                    
                    <h4>Mix and match</h4>
                    <div className="container">
                        Stack the columns on mobile by making one full-width and the other half-width
                        <div className="row">
                            <div className="col col-md-8 card">.col .col-md-8</div>
                            <div className="col-6 col-md-4 card">.col-6 .col-md-4</div>
                        </div>

                        Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop
                        <div className="row">
                            <div className="col-6 col-md-4 card">.col-6 .col-md-4</div>
                            <div className="col-6 col-md-4 card">.col-6 .col-md-4</div>
                            <div className="col-6 col-md-4 card">.col-6 .col-md-4</div>
                        </div>

                        Columns are always 50% wide, on mobile and desktop
                        <div className="row">
                            <div className="col-6 card">.col-6</div>
                            <div className="col-6 card">.col-6</div>
                        </div>
                    </div>
                    <hr/>

                    <h3>Alignment</h3>

                    <h4>Vertical Alignment </h4>
                    <div className="container">
                        <div className="row align-items-start">
                            <div className="col card">
                                One of three columns
                            </div>
                            <div className="col card">
                                One of three columns
                            </div>
                            <div className="col card">
                                One of three columns
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col card">
                                One of three columns
                            </div>
                            <div className="col card">
                                One of three columns
                            </div>
                            <div className="col card">
                                One of three columns
                            </div>
                        </div>
                        <div className="row align-items-end">
                            <div className="col card">
                                One of three columns
                            </div>
                            <div className="col card">
                                One of three columns
                            </div>
                            <div className="col card">
                                One of three columns
                            </div>
                        </div>
                    </div>
                    <hr/>

                    <h4>Yet vertical</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col align-self-start card">
                                1
                            </div>
                            <div className="col align-self-center card">
                                2
                            </div>
                            <div className="col align-self-end card">
                                3
                            </div>
                        </div>
                    </div>
                    <hr/>

                    <h4>Horizontal alignment</h4>
                    <div className="container">
                        row justify-content-start
                        <div className="row justify-content-start">
                            <div className="col-4 card">
                                One of two columns
                            </div>
                            <div className="col-4 card">
                                One of two columns
                            </div>
                        </div>
                        -center
                        <div className="row justify-content-center">
                            <div className="col-4 card">
                                One of two columns
                            </div>
                            <div className="col-4 card">
                                One of two columns
                            </div>
                        </div>
                        -end
                        <div className="row justify-content-end">
                            <div className="col-4 card">
                                One of two columns
                            </div>
                            <div className="col-4 card">
                                One of two columns
                            </div>
                        </div>
                        -around
                        <div className="row justify-content-around">
                            <div className="col-4 card">
                                One of two columns
                            </div>
                            <div className="col-4 card">
                                One of two columns
                            </div>
                        </div>
                        -between
                        <div className="row justify-content-between">
                            <div className="col-4 card">
                                One of two columns
                            </div>
                            <div className="col-4 card">
                                One of two columns
                            </div>
                        </div>
                    </div>
                    <hr/>

                    <h4>No gutters</h4>
                    <div className="container">
                        <div className="row no-gutters">
                            <div className="col-12 col-sm-6 col-md-8 card">.col-12 .col-sm-6 .col-md-8</div>
                            <div className="col-6 col-md-4 card">.col-6 .col-md-4</div>
                        </div>
                    </div>
                    <hr/>

                    <h4>Column wrapping</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col-9 card">.col-9</div>
                            <div className="col-4 card">.col-4<br/>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
                            <div className="col-6 card">.col-6<br/>Subsequent columns continue along the new line.</div>
                        </div>
                    </div>
                    <hr/>
                    
                    <h4>Column resets</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col-6 col-sm-3 card">.col-6 .col-sm-3</div>
                            <div className="col-6 col-sm-3 card">.col-6 .col-sm-3</div>
                        
                            <div className="clearfix hidden-sm-up"></div>

                            <div className="col-6 col-sm-3 card">.col-6 .col-sm-3</div>
                            <div className="col-6 col-sm-3 card">.col-6 .col-sm-3</div>
                        </div>
                    </div>
                    <hr/>

                    <h3>Reordering</h3>

                    <h4>Flex order</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col flex-unordered card">
                                First, but "col flex-unordered"
                            </div>
                            <div className="col flex-last card">
                                Second, but "col flex-last"
                            </div>
                            <div className="col flex-first card">
                                Third, but "col flex-first"
                            </div>
                        </div>
                    </div>                
                    <hr/>

                    <h4>Offsetting columns</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 card">.col-md-4</div>
                            <div className="col-md-4 offset-md-4 card">.col-md-4 .offset-md-4</div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 offset-md-3 card">.col-md-3 .offset-md-3</div>
                            <div className="col-md-3 offset-md-3 card">.col-md-3 .offset-md-3</div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 offset-md-3 card">.col-md-6 .offset-md-3</div>
                        </div>                
                    </div>
                    <hr />

                    <h4>Push and pull</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 push-md-3 card">.col-md-9 .push-md-3</div>
                            <div className="col-md-3 pull-md-9 card">.col-md-3 .pull-md-9</div>
                        </div>
                    </div>
                    <hr/>

                    <h3>Nesting</h3>
                    <div className="container">
                        <div className="row">
                            <div className="col-9 card">
                                Level 1: .col-9
                                <div className="row">
                                    <div className="col-8 card">
                                        Level 2: .col-8 
                                    </div>
                                    <div className="col-4 card">
                                        Level 2: .col-4
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>

                    <h2 className="redTextColor sticky-top">Media object</h2>
                    
                    <h3>Example</h3>
                    <div className="media">
                        <img className="d-flex mr-3" src="./img.png" alt="Hello"/>
                        <div className="media-body">
                            <h5 className="mt-0">Media heading</h5>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </div>
                    </div>
                    <hr/>
                    
                    <h1>Content</h1>

                    <h2 className="redTextColor">Typography</h2>

                    <h3>Display headings</h3>
                    <h1 className="display-1">Display 1</h1>
                    <p className="display-2">Display 2</p>
                    <div className="display-3">Display 3</div>
                    <h1 className="display-4">Display 4</h1>
                    <hr/>

                    <h3>Lead</h3>
                    <p className="lead">
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
                    </p>
                    <hr/>

                    <h3>Inline text elements</h3>
                    <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                    <p><del>This line of text is meant to be treated as deleted text.</del></p>
                    <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
                    <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
                    <p><u>This line of text will render as underlined</u></p>
                    <p><small>This line of text is meant to be treated as fine print.</small></p>
                    <p><strong>This line rendered as bold text.</strong></p>
                    <p><em>This line rendered as italicized text.</em></p>
                    <hr/>

                    <h3>Text utilities</h3>

                    <h4>Abbreviations</h4>
                    <p><abbr title="attribute">attr</abbr></p>
                    <p><abbr title="HyperText Markup Language" className="initialism">HTML</abbr></p>
                    <hr/>

                    <h4>Blockquotes</h4>
                    <blockquote className="blockquote">
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    </blockquote>
                    <hr/>

                    <h4>Naming a source</h4>
                    <blockquote className="blockquote">
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer className="blockquote-footer">
                            Someone famous in 
                            <cite title="Source Title">Source Title</cite>
                        </footer>
                    </blockquote>
                    <hr/>

                    <h4>Reverse a layout</h4>
                    <blockquote className="blockquote blockquote-reverse">
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer className="blockquote-footer">
                            Someone famous in 
                            <cite title="Source Title">Source Title</cite>
                        </footer>
                    </blockquote>
                    <hr/>

                    <h3>Lists</h3>

                    <h4>Unstyled</h4>
                    <ul className="list-unstyled">
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Consectetur adipiscing elit</li>
                        <li>Integer molestie lorem at massa</li>
                        <li>Facilisis in pretium nisl aliquet</li>
                        <li>Nulla volutpat aliquam velit
                            <ul>
                            <li>Phasellus iaculis neque</li>
                            <li>Purus sodales ultricies</li>
                            <li>Vestibulum laoreet porttitor sem</li>
                            <li>Ac tristique libero volutpat at</li>
                            </ul>
                        </li>
                        <li>Faucibus porta lacus fringilla vel</li>
                        <li>Aenean sit amet erat nunc</li>
                        <li>Eget porttitor lorem</li>
                    </ul>
                    <hr/>

                    <h4>Inline</h4>
                    <ul className="list-inline">
                        <li className="list-inline-item">Один</li>
                        <li className="list-inline-item">Два</li>
                        <li className="list-inline-item">Три</li>
                    </ul>
                    <hr/>

                    <h4>Description list alignment</h4>
                    <dl className="row">
                        <dt className="col-sm-3">Description lists</dt>
                        <dd className="col-sm-9">A description list is perfect for defining terms.</dd>

                        <dt className="col-sm-3">Euismod</dt>
                        <dd className="col-sm-9">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
                        <dd className="col-sm-9 offset-sm-3">Donec id elit non mi porta gravida at eget metus.</dd>

                        <dt className="col-sm-3">Malesuada porta</dt>
                        <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

                        <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
                        <dd className="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

                        <dt className="col-sm-3">Nesting</dt>
                        <dd className="col-sm-9">
                            <dl className="row">
                                <dt className="col-sm-4">Nested definition list</dt>
                                <dd className="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
                            </dl>
                        </dd>
                    </dl>                
                    <hr/>

                    <h2 className="redTextColor">Code</h2>

                    <h3>Inline code</h3>
                    <p>For example, <code>&lt;section&gt;</code> should be wrapped as inline.</p>
                    <hr/>

                    <h3>Code blocks</h3>
                    <pre>
                        <code>
                            &lt;p&gt;Sample text here...&lt;/p&gt; <br/>
                            &lt;p&gt;And another line of sample text here...&lt;/p&gt;
                    </code>
                    </pre>
                    <hr/>

                    <h3>Variables</h3>
                    <var>y</var> = <var>m</var><var>x</var> + <var>b</var>
                    <hr/>

                    <h3>User input</h3>
                    To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br/>
                    To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
                    <hr/>

                    <h3>Sample output</h3>
                    <samp>This text is meant to be treated as sample output from a computer program.</samp>
                    <hr/>

                    <h2 className="redTextColor">Images</h2>

                    <h3>Responsive images</h3>
                    <img src="./img.png" className="img-fluid" alt="Responsive img"/>
                    <hr/>

                    <h3>Image thumbnails</h3>
                    <img src="./img.png" alt="img thumbnail" className="img-thumbnail"/>
                    <hr/>

                    <h3>Aligning images</h3>
                    <div className="container">
                        <img src="favicon.ico" className="rounded float-left" alt="..."/>
                        <img src="favicon.ico" className="rounded float-right" alt="..."/>
                    </div>
                    <hr/>

                    <h2 className="redTextColor">Tables</h2>

                    <h3>Examples</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr/>

                    <h3>Invers Table Colors</h3>
                    <table className="table table-inverse">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr/>

                    <h3>Table Head Options</h3>
                    <table className="table">
                        <thead className="thead-inverse">
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr/>
                    <table className="table">
                        <thead className="thead-default">
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr/>

                    <h3>Striped rows</h3>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr/>

                    <h3>Bordered table</h3>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr/>

                    <h3>Hoverable rows</h3>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr/>

                    <h3>Small table</h3>
                    <table className="table table-sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr/>

                    <h3>Contextual classes</h3>
                    <table className="table table-sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="table-active">
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr className="table-success">
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr className="table-danger">
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            <tr className="table-warning">
                                <th scope="row">4</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr className="table-info">
                                <th scope="row">5</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr className="bg-primary">
                                <th scope="row">6</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            <tr className="bg-success">
                                <th scope="row">7</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr className="bg-warning">
                                <th scope="row">8</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr className="bg-danger">
                                <th scope="row">9</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            <tr className="bg-info">
                                <th scope="row">10</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr/>

                    <h3>Responsive tables</h3>
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr/>

                    <h2 className="redTextColor">Figures</h2>

                    <figure className="figure">
                        <img src="largeImg.png" className="figure-img img-fluid rounded" alt="img"/>
                        <figcaption className="figure-caption">A caption for the above image.</figcaption>
                    </figure>
                    <hr/>
                    <figure className="figure">
                        <img src="largeImg.png" className="figure-img img-fluid rounded" alt="img"/>
                        <figcaption className="figure-caption text-right">A caption for the above image.</figcaption>
                    </figure>

                    <h1>Components</h1>
                    <h2 className="redTextColor">1)Alerts</h2>
                    
                    <h3>Examples</h3>                
                    <div className="alert alert-success" role="alert">
                        <strong>Well done!</strong> You successfully read this important alert message.
                    </div>
                    <div className="alert alert-info" role="alert">
                        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
                    </div>
                    <div className="alert alert-warning" role="alert">
                        <strong>Warning!</strong> Better check yourself, you're not looking too good.
                    </div>
                    <div className="alert alert-danger" role="alert">
                        <strong>Oh snap!</strong> Change a few things up and try submitting again.
                    </div>
                    <hr/>

                    <h3>Link color</h3>
                    <div className="alert alert-success" role="alert">
                        <strong>Well done!</strong> You successfully read 
                        <a href="#" className="alert-link">this important alert message</a>.
                    </div>
                    <div className="alert alert-info" role="alert">
                        <strong>Heads up!</strong> This 
                        <a href="#" className="alert-link">alert needs your attention</a>
                        , but it's not super important.
                    </div>
                    <div className="alert alert-warning" role="alert">
                        <strong>Warning!</strong> Better check yourself, you're 
                        <a href="#" className="alert-link">not looking too good</a>.
                    </div>
                    <div className="alert alert-danger" role="alert">
                        <strong>Oh snap!</strong> 
                        <a href="#" className="alert-link">
                            Change a few things up
                        </a> 
                        and try submitting again.
                    </div>
                    <hr/>
                </div>
                <div>
                    <h3>Additional content</h3>
                    <div className="alert alert-success" role="alert">
                        <h4 className="alert-heading">Well done!</h4>
                        <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                        <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                    </div>                    
                    <hr/>

                    <h3>Dismissing</h3>
                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                    </div>                    
                    <hr/>

                    <h3>JavaScript Behavior</h3>
                    <h4>Triggers</h4>
                    <h4>Methods</h4>
                    <h4>Events</h4>
                    <hr/>
                    
                    <h2 className="redTextColor">2)Badges</h2>
                    <h3>Example</h3>
                    <h1>Example heading <span className="badge badge-default">New1</span></h1>
                    <h2>Example heading <span className="badge badge-default">New2</span></h2>
                    <h3>Example heading <span className="badge badge-default">New3</span></h3>
                    <h4>Example heading <span className="badge badge-default">New4</span></h4>
                    <h5>Example heading <span className="badge badge-default">New5</span></h5>
                    <h6>Example heading <span className="badge badge-default">New6</span></h6>
                    <hr/>

                    <h3>Contextual variations</h3>
                    <span className="badge badge-default">Default</span>
                    <span className="badge badge-primary">Primary</span>
                    <span className="badge badge-success">Success</span>
                    <span className="badge badge-info">Info</span>
                    <span className="badge badge-warning">Warning</span>
                    <span className="badge badge-danger">Danger</span>         
                    <hr/>           

                    <h3>Pill badges</h3>
                    <span className="badge badge-pill badge-default">Default</span>
                    <span className="badge badge-pill badge-primary">Primary</span>
                    <span className="badge badge-pill badge-success">Success</span>
                    <span className="badge badge-pill badge-info">Info</span>
                    <span className="badge badge-pill badge-warning">Warning</span>
                    <span className="badge badge-pill badge-danger">Danger</span>
                    <hr/>

                    <h2 className="redTextColor">3)Breadcrumb</h2>
                    <h3>Using list markup - ol and li:</h3>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active">Home</li>
                    </ol>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">Library</li>
                    </ol>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Library</a></li>
                        <li className="breadcrumb-item active">Data</li>
                    </ol>
                    <hr/>

                    <h3>Using nav and a and span for last element :</h3>
                    <nav className="breadcrumb">
                        <a className="breadcrumb-item" href="#">Home</a>
                        <a className="breadcrumb-item" href="#">Library</a>
                        <a className="breadcrumb-item" href="#">Data</a>
                        <span className="breadcrumb-item active">Bootstrap</span>
                    </nav>
                    <hr/>
                    
                    <h2 className="redTextColor">4)Buttons</h2>
                    <h3>Examples</h3>
                    <button type="button" className="btn btn-primary">Primary</button>
                    <button type="button" className="btn btn-secondary">Secondary</button>
                    <button type="button" className="btn btn-success">Success</button>
                    <button type="button" className="btn btn-info">Info</button>
                    <button type="button" className="btn btn-warning">Warning</button>
                    <button type="button" className="btn btn-danger">Danger</button>
                    <button type="button" className="btn btn-link">Link</button>                    
                    <hr/>

                    <h3>Button tags</h3>
                    <a className="btn btn-primary" href="#" role="button">Link</a>
                    <button className="btn btn-primary" type="submit">Button</button>
                    <input className="btn btn-primary" type="button" value="Input"/>
                    <input className="btn btn-primary" type="submit" value="Submit"/>
                    <input className="btn btn-primary" type="reset" value="Reset"/>
                    <hr/>

                    <h3>Outline buttons</h3>
                    <button type="button" className="btn btn-outline-primary">Primary</button>
                    <button type="button" className="btn btn-outline-secondary">Secondary</button>
                    <button type="button" className="btn btn-outline-success">Success</button>
                    <button type="button" className="btn btn-outline-info">Info</button>
                    <button type="button" className="btn btn-outline-warning">Warning</button>
                    <button type="button" className="btn btn-outline-danger">Danger</button>                    
                    <hr/>

                    <h3>Sizes</h3>
                    <h4>.btn-lg</h4>
                    <button type="button" className="btn btn-primary btn-lg">Large button</button>
                    <button type="button" className="btn btn-secondary btn-lg">Large button</button>
                    <hr/>
                    <h4>.btn-sm</h4>
                    <button type="button" className="btn btn-primary btn-sm">Small button</button>
                    <button type="button" className="btn btn-secondary btn-sm">Small button</button>                    
                    <hr/>
                    <h4>.btn-block</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col-3 offset-4">
                                <button type="button" className="btn btn-primary btn-block">Block level button</button>                            
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-6 offset-2">
                                <button type="button" className="btn btn-danger btn-block">Block level button</button>
                            </div>
                        </div>
                    </div>
                    <hr/>

                    <h3>Active state when using a (need to replicate the state programmatically)</h3>
                    <a href="#" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Primary link</a>
                    <a href="#" className="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Link</a>                    
                    <hr/>

                    <h3>Disabled state</h3>
                    <button type="button" className="btn btn-lg btn-primary" disabled>Primary button</button>
                    <button type="button" className="btn btn-secondary btn-lg" disabled>Button</button>
                    <hr/>

                    <h3>Button plugin</h3>
                    
                    <h4>Tooggle states</h4>
                    <button type="button" className="btn btn-secondary" data-toggle="button" aria-pressed="false" autocomplete="off">
                        Single toggle
                    </button>                    
                    <hr/>
                    
                    <h4>Checkbox and radio buttons</h4>
                    <h5>input type is Checkbox</h5>
                    <div className="btn-group" data-toggle="buttons">
                        <label className="btn btn-danger active">
                            <input type="checkbox" checked autocomplete="off"/>Checkbox 1 (pre-checked)
                        </label>
                        <label className="btn btn-danger">
                            <input type="checkbox" autocomplete="off"/>Checkbox 2
                        </label>
                        <label className="btn btn-danger">
                            <input type="checkbox" autocomplete="off"/>Checkbox 3
                        </label>
                    </div>
                    <h5>input type is Radio</h5>
                    <div className="btn-group" data-toggle="buttons">
                        <label className="btn btn-warning active">
                            <input type="radio" name="options" id="option1" autocomplete="off" checked/> Radio 1 (preselected)
                        </label>
                        <label className="btn btn-warning">
                            <input type="radio" name="options" id="option2" autocomplete="off"/> Radio 2
                        </label>
                        <label className="btn btn-warning">
                            <input type="radio" name="options" id="option3" autocomplete="off"/> Radio 3
                        </label>
                    </div>                    
                    <hr/>

                    <h3>Methods</h3>
                    <hr/>

                    <h2 className="redTextColor">5)Button group</h2>
                    <h3>Basic example</h3>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-secondary">Left</button>
                        <button type="button" className="btn btn-secondary">Middle</button>
                        <button type="button" className="btn btn-secondary">Right</button>
                    </div>                    
                    <hr/>

                    <h3>Button toolbar</h3>
                    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                        <div className="btn-group mr-1" role="group" aria-label="First group">
                            <button type="button" className="btn btn-secondary">1</button>
                            <button type="button" className="btn btn-secondary">2</button>
                            <button type="button" className="btn btn-secondary">3</button>
                            <button type="button" className="btn btn-secondary">4</button>
                        </div>
                        <div className="btn-group mr-1" role="group" aria-label="Second group">
                            <button type="button" className="btn btn-secondary">5</button>
                            <button type="button" className="btn btn-secondary">6</button>
                            <button type="button" className="btn btn-secondary">7</button>
                        </div>
                        <div className="btn-group" role="group" aria-label="Third group">
                            <button type="button" className="btn btn-secondary">8</button>
                        </div>
                    </div>
                    
                    <h4>Mix input groups</h4>
                    <div className="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
                        <div className="btn-group mr-2" role="group" aria-label="First group">
                            <button type="button" className="btn btn-secondary">1</button>
                            <button type="button" className="btn btn-secondary">2</button>
                            <button type="button" className="btn btn-secondary">3</button>
                            <button type="button" className="btn btn-secondary">4</button>
                        </div>
                        <div className="input-group">
                            <span className="input-group-addon" id="btnGroupAddon">@</span>
                            <input type="text" className="form-control" placeholder="Input group example" aria-describedby="btnGroupAddon"/>
                        </div>
                    </div>

                    <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                        <div className="btn-group" role="group" aria-label="First group">
                            <button type="button" className="btn btn-secondary">1</button>
                            <button type="button" className="btn btn-secondary">2</button>
                            <button type="button" className="btn btn-secondary">3</button>
                            <button type="button" className="btn btn-secondary">4</button>
                        </div>
                        <div className="input-group">
                            <span className="input-group-addon" id="btnGroupAddon2">@</span>
                            <input type="text" className="form-control" placeholder="Input group example" aria-describedby="btnGroupAddon2"/>
                        </div>
                    </div>                    
                    
                    <hr/>

                    <h3>Sizing</h3>
                    <div className="btn-group btn-group-lg" role="group">
                        <button type="button" className="btn btn-success">1</button>
                        <button type="button" className="btn btn-success">2</button>
                        <button type="button" className="btn btn-success">3</button>
                    </div>
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-success">1</button>
                        <button type="button" className="btn btn-success">2</button>
                        <button type="button" className="btn btn-success">3</button>
                    </div>
                    <div className="btn-group btn-group-sm" role="group">
                        <button type="button" className="btn btn-success">1</button>
                        <button type="button" className="btn btn-success">2</button>
                        <button type="button" className="btn btn-success">3</button>
                    </div>                    
                    <hr/>

                    <h3>Nesting</h3>
                    <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                        <button type="button" className="btn btn-secondary">1</button>
                        <button type="button" className="btn btn-secondary">2</button>

                        <div className="btn-group" role="group">
                            <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </button>
                            <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                <a className="dropdown-item" href="#">Dropdown link</a>
                                <a className="dropdown-item" href="#">Dropdown link</a>
                            </div>
                        </div>
                    </div>                    
                    <hr/>
                    
                    <h3>Vertical variation</h3>
                    <div className="btn-group-vertical" role="group">
                        <button type="button" className="btn btn-info mb-1">1</button>
                        <button type="button" className="btn btn-info mb-1">2</button>
                        <button type="button" className="btn btn-info mb-1">3</button>
                    </div> 
                    <hr/>

                    <h3>Tooltips and popovers</h3>
                    
                    <hr/>

                </div>
                <div>
                    <h2 className="redTextColor">6)Cards</h2>
                    
                    <h3>Example</h3>
                    <div className="card" style={{width: spacing + 'rem'}}>
                        <img className="card-img-top" src="img.png" alt="Card image cap"/>
                        <div className="card-block">
                            <h4 className="card-title">Card title</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <hr/>

                    <h3>Content types</h3>

                    <h4>Blocks</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col-2 offset-3">
                                <div className="card">
                                    <div className="card-block">
                                        This is some text within a card block.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>

                    <h4>Titles, text, and links</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col-5 offset-5">
                                <div className="card">
                                    <div className="card-block">
                                        <h4 className="card-title">Card title</h4>
                                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="card-link">Card link</a>
                                        <a href="#" className="card-link">Another link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>

                    <h4>Images</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col-4 offset-2">
                                <div className="card">
                                    <img className="card-img-top" src="img.png" alt="Card image cap"/>
                                    <div className="card-block">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>

                    <h4>List groups</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                                <div className="card">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Cras justo odio</li>
                                        <li className="list-group-item">Dapibus ac facilisis in</li>
                                        <li className="list-group-item">Vestibulum at eros</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>

                    <h4>Kitchen sink</h4>                    
                    <div className="card mb-2" style={{width:spacing+'rem'}}>
                        <img className="card-img-top" src="favicon.ico" alt="Card image cap"/>
                        <div claclassNamess="card-block">
                            <h4 className="card-title">Card title</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Cras justo odio</li>
                            <li className="list-group-item">Dapibus ac facilisis in</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                        </ul>
                        <div className="card-block">
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>                    
                    <hr/>

                    <h4>Header and footer</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col-3 offset-6">
                                <div className="card">
                                    <div className="card-header">
                                        Featured
                                    </div>
                                    <div className="card-block">
                                        <h4 className="card-title">Special title treatment</h4>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h5>To h* elems:</h5>
                    <div className="container">
                        <div className="row">
                            <div className="col-6 offset-1">
                                <div className="card">
                                    <h3 className="card-header">Featured</h3>
                                    <div className="card-block">
                                        <h4 className="card-title">Special title treatment</h4>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#" className="btn btn-success">Go somewhere</a>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>

                    <h5>With footer, text centered:</h5>
                    <div className="container">
                        <div className="row">
                            <div className="col-6 offset-1">
                                <div className="card text-center">
                                    <h3 className="card-header">Featured</h3>
                                    <div className="card-block">
                                        <h4 className="card-title">Special title treatment</h4>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#" className="btn btn-danger">Go somewhere</a>
                                    </div>
                                    <div className="card-footer">
                                        2 days ago
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <hr/>

                    <h3>Sizing</h3>
            
                    <h4>Using grid markup</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <div className="card">
                                <div className="card-block">
                                    <h3 className="card-title">Special title treatment</h3>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" className="btn btn-warning">Go somewhere</a>
                                </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="card">
                                <div className="card-block">
                                    <h3 className="card-title">Special title treatment</h3>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" className="btn btn-secondary">Go somewhere</a>
                                </div>
                                </div>
                            </div>
                        </div>                    
                    </div>
                    <hr/>

                    <h4>Using utilities</h4>
                    <div className="card w-75">
                        <div className="card-block">
                            <h3 className="card-title">Card title</h3>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Button</a>
                        </div>
                        </div>

                        <div className="card w-50">
                        <div className="card-block">
                            <h3 className="card-title">Card title</h3>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Button</a>
                        </div>
                    </div>                    
                    <hr/>

                    <h4>Using custom CSS</h4>
                    <div className="card" style={{width:spacing+'rem'}}>
                        <div className="card-block">
                            <h3 className="card-title">Special title treatment</h3>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>                    
                    <hr/>

                    <h3>Text alignment</h3>
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <div className="card">
                                    <div className="card-block">
                                        <h4 className="card-title">Special title treatment</h4>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#" className="btn btn-danger">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card text-center">
                                    <div className="card-block">
                                        <h4 className="card-title">Special title treatment</h4>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#" className="btn btn-warning">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card text-right">
                                    <div className="card-block">
                                        <h4 className="card-title">Special title treatment</h4>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <a href="#" className="btn btn-success">Go somewhere</a>
                                    </div>
                                </div>                    
                            </div>
                        </div>                    
                    </div>
                    <hr/>

                    <h3>Navigation</h3>
                    <div className="card text-center w-25">
                        <div className="card-header">
                            <ul className="nav nav-tabs card-header-tabs">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Active</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Disabled</a>
                            </li>
                            </ul>
                        </div>
                        <div className="card-block">
                            <h4 className="card-title">Special title treatment</h4>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <hr/>

                    <h3>Images</h3>

                    <h4>Image caps</h4>
                    <div className="card mb-3 w-25">
                        <img className="card-img-top" src="favicon.ico" alt="Card image cap"/>
                        <div className="card-block">
                            <h4 className="card-title">Card title</h4>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card w-25">
                        <div className="card-block">
                            <h4 className="card-title">Card title</h4>
                            <p claclassNamess="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        <img className="card-img-bottom" src="favicon.ico" alt="Card image cap"/>
                    </div>                    
                    <hr/>
                    
                    <h4>Image overlays</h4>
                    <div className="card w-50">
                        <img className="card-img" src="largeImg.png" alt="Card image"/>
                        <div className="card-img-overlay">
                            <h4 className="card-title">Card title</h4>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>                    
                    <hr/>

                    <h3>Card styles</h3>

                    <h4>Inverted text</h4>
                    <hr/>

                    <h4>Background variants</h4>
                    <div className="card card-inverse card-primary mb-3 text-center">
                        <div className="card-block">
                            <blockquote className="card-blockquote">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                            </blockquote>
                        </div>
                    </div>
                    <div className="card card-inverse card-success mb-3 text-center">
                        <div className="card-block">
                            <blockquote className="card-blockquote">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                            </blockquote>
                        </div>
                    </div>
                    <div className="card card-inverse card-info mb-3 text-center">
                        <div className="card-block">
                            <blockquote className="card-blockquote">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                            </blockquote>
                        </div>
                    </div>
                    <div className="card card-inverse card-warning mb-3 text-center">
                        <div className="card-block">
                            <blockquote className="card-blockquote">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                            </blockquote>
                        </div>
                    </div>
                    <div className="card card-inverse card-danger text-center">
                        <div className="card-block">
                            <blockquote className="card-blockquote">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                            </blockquote>
                        </div>
                    </div>                    
                    <hr/>

                    <h4>Outline cards</h4>
                    <div className="card card-outline-primary mb-3 text-center">
                        <div className="card-block">
                            <blockquote className="card-blockquote">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                            </blockquote>
                        </div>
                    </div>
                    <div className="card card-outline-success mb-3 text-center">
                        <div className="card-block">
                            <blockquote className="card-blockquote">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                            </blockquote>
                        </div>
                    </div>
                    <div className="card card-outline-info mb-3 text-center">
                        <div className="card-block">
                            <blockquote className="card-blockquote">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                            </blockquote>
                        </div>
                    </div>
                    <div className="card card-outline-warning mb-3 text-center">
                        <div className="card-block">
                            <blockquote className="card-blockquote">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                            </blockquote>
                        </div>
                    </div>
                    <div className="card card-outline-danger text-center">
                        <div className="card-block">
                            <blockquote className="card-blockquote">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                            </blockquote>
                        </div>
                    </div>              
                    <hr/>

                    <h3>Card layout</h3>

                    <h4>Card groups</h4>
                    <div className="container">
                        <div className="row">                            
                            <div className="card-group">
                                <div className="card">
                                    <img className="card-img-top" src="img.png" alt="Card image cap"/>
                                    <div className="card-block">
                                        <h4 className="card-title">Card title</h4>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                <div className="card">
                                    <img className="card-img-top" src="img.png" alt="Card image cap"/>
                                    <div className="card-block">
                                        <h4 className="card-title">Card title</h4>
                                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                <div className="card">
                                    <img className="card-img-top" src="img.png" alt="Card image cap"/>
                                    <div className="card-block">
                                        <h4 className="card-title">Card title</h4>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>

                    <h4>Card decks</h4>
                    <div className="container">
                        <div className="row">                            
                            <div className="card-deck">
                                <div className="card">
                                    <img className="card-img-top" src="img.png" alt="Card image cap"/>
                                    <div className="card-block">
                                        <h4 className="card-title">Card title</h4>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                <div className="card">
                                    <img className="card-img-top" src="img.png" alt="Card image cap"/>
                                    <div className="card-block">
                                        <h4 className="card-title">Card title</h4>
                                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                <div className="card">
                                    <img className="card-img-top" src="img.png" alt="Card image cap"/>
                                    <div className="card-block">
                                        <h4 className="card-title">Card title</h4>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr/>

                    <h4>Card columns</h4>
                    <div className="card-columns">
                        <div className="card">
                            <div className="card-block">
                                <h4 className="card-title">Card title that wraps to a new line</h4>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                        <div className="card p-3">
                            <blockquote className="card-block card-blockquote">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <footer>
                                    <small className="text-muted">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </small>
                                </footer>
                            </blockquote>
                        </div>
                        <div className="card">
                            <div className="card-block">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="card card-inverse card-primary p-3 text-center">
                            <blockquote className="card-blockquote">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                                <footer>
                                    <small>
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </small>
                                </footer>
                            </blockquote>
                        </div>
                        <div className="card text-center">
                            <div className="card-block">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="card p-3 text-right">
                            <blockquote className="card-blockquote">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <footer>
                                    <small className="text-muted">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </small>
                                </footer>
                            </blockquote>
                        </div>
                        <div className="card">
                            <div className="card-block">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>                    
                    <hr/>

                </div>
                <div>
                    <h2 className="redTextColor">7)Carousel</h2>
                        
                    <h3>Example</h3>

                    <h4>Slides only</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col-2 offset-1">
                                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner" role="listbox">
                                        <div className="carousel-item active">
                                            <img className="d-block img-fluid" src="largeImg.png" alt="First slide"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src="largeImg.png" alt="Second slide"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src="largeImg.png" alt="Third slide"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                    
                    <hr/>

                    <h4>With controls</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col-2 offset-2">
                                <div id="carousel2" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner" role="listbox">
                                        <div className="carousel-item active">
                                            <img className="d-block img-fluid" src="largeImg.png" alt="First slide"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src="largeImg.png" alt="Second slide"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src="largeImg.png" alt="Third slide"/>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carousel2" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carousel2" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <hr/>

                    <h4>With indicators</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col-2 offset-3">
                                <div id="carousel3" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carousel3" data-slide-to="0" className="active"></li>
                                        <li data-target="#carousel3" data-slide-to="1"></li>
                                        <li data-target="#carousel3" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner" role="listbox">
                                        <div className="carousel-item active">
                                            <img className="d-block img-fluid" src="largeImg.png" alt="First slide"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src="largeImg.png" alt="Second slide"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src="largeImg.png" alt="Third slide"/>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carousel3" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carousel3" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <hr/>

                    <h4>With captions</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col-4 offset-4">
                                <div id="carousel4" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carousel4" data-slide-to="0" className="active"></li>
                                        <li data-target="#carousel4" data-slide-to="1"></li>
                                        <li data-target="#carousel4" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner" role="listbox">
                                        <div className="carousel-item active">
                                            <img className="d-block img-fluid" src="largeImg.png" alt="First slide"/>
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5>Title1</h5>
                                                <p>Description1</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src="largeImg.png" alt="Second slide"/>
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5>Title2</h5>
                                                <p>Description2</p>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src="largeImg.png" alt="Third slide"/>
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5>Title3</h5>
                                                <p>Description3</p>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carousel4" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carousel4" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>   
                    <hr/>

                    <h3>Usage</h3>

                    <h4>Via data attributes</h4>
                    <hr/>

                    <h4>Via JavaScript</h4>
                    <hr/>
                    
                    <h4>Options</h4>
                    props: interval, keyboard, pause, ride, wrap etc.
                    <hr/>

                    <h4>Methods</h4>
                    <hr/>

                    <h4>Events</h4>
                    <hr/>

                </div>
                <div>
                    <h2 className="redTextColor">8)Collapse</h2>
                        
                    <h3>Example</h3>
                    <p>
                        <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Link with href
                        </a>
                        <button className="btn btn-danger" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Button with data-target
                        </button>
                    </p>
                    <div className="collapse" id="collapseExample">
                        <div className="card card-block">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                    </div>                        
                    <hr/>

                    <h3>Accordion Example</h3>
                    <div id="accordion" role="tablist" aria-multiselectable="true">
                        <div className="card">
                            <div className="card-header" role="tab" id="headingOne">
                                <h5 className="mb-0">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Collapsible Group Item #1
                                    </a>
                                </h5>
                            </div>

                            <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne">
                                <div className="card-block">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" role="tab" id="headingTwo">
                                <h5 className="mb-0">
                                    <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Collapsible Group Item #2
                                    </a>
                                </h5>
                            </div>
                            <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo">
                                <div className="card-block">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" role="tab" id="headingThree">
                                <h5 className="mb-0">
                                    <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Collapsible Group Item #3
                                    </a>
                                </h5>
                            </div>
                            <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree">
                                <div className="card-block">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                            </div>
                        </div>
                    </div>                        
                    <hr/>

                    <h3>Accessibility</h3>
                    
                    <hr/>

                    <h3>Usage</h3>
                    
                    <hr/>

                </div>
                <div>
                    <h2 className="redTextColor">9)Dropdowns</h2>
                        
                    <h3>Examples</h3>
                    
                    <h4>Single button dropdowns</h4>
                    <div className="dropdown">
                        <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown button
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>                    
                    <hr/>

                    <h4>Split button dropdowns</h4>
                    <div className="btn-group">
                        <button type="button" className="btn btn-danger">Action</button>
                        <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div className="dropdown-divider"></div>
                            <a id="separatedLinkEl" className="dropdown-item" href="#separatedLinkEl">Separated link</a>
                        </div>
                    </div>                    
                    <hr/>

                    <h3>Sizing</h3>
                    <div className="btn-group">
                        <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Large button
                        </button>
                        <div className="dropdown-menu">
                            ...
                        </div>
                    </div>

                    <div className="btn-group">
                        <button className="btn btn-info btn-sm dropdown-toggle-split" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            Small button
                        </button>
                        <button type="button" className="btn btn-sm btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu">
                            ...
                        </div>
                    </div>                    
                    <hr/>

                    <h3>Dropup variation</h3>
                    <div className="dropup">
                        <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown button
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div> 
                    <hr/>

                    <h3>Menu items (may be not only a, but (from v.4) buttons too)</h3>
                    <div className="dropdown">
                        <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button className="dropdown-item" type="button">Action</button>
                            <button className="dropdown-item" type="button">Another action</button>
                            <button className="dropdown-item" type="button">Something else here</button>
                        </div>
                    </div>
                    <hr/>

                    <h3>Menu alignment</h3>
                    <div className="btn-group">
                        <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            This dropdown's menu is right-aligned
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <button className="dropdown-item" type="button">Action</button>
                            <button className="dropdown-item" type="button">Another action</button>
                            <button className="dropdown-item" type="button">Something else here</button>
                        </div>
                    </div>
                    <hr/>

                    <h3>Menu headers</h3>
                    <div className="btn-group">
                        <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            This dropdown's menu has a header
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <h6 className="dropdown-header">Dropdown header</h6>
                            <button className="dropdown-item" type="button">Action</button>
                            <button className="dropdown-item" type="button">Another action</button>
                            <button className="dropdown-item" type="button">Something else here</button>
                        </div>
                    </div>                
                    <hr/>

                    <h3>Menu dividers</h3>
                    <div className="btn-group">
                        <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            This dropdown's menu has a dividers
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <h6 className="dropdown-header">Dropdown header</h6>
                            <div className="dropdown-divider"></div>
                            <button className="dropdown-item" type="button">Action</button>
                            <div className="dropdown-divider"></div>
                            <button className="dropdown-item" type="button">Another action</button>
                            <div className="dropdown-divider"></div>
                            <button className="dropdown-item" type="button">Something else here</button>
                        </div>
                    </div>
                    <hr/>

                    <h3>Disabled menu items</h3>
                    <div className="btn-group">
                        <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            This dropdown's menu has a one disabled element.
                        </button>
                        <div className="dropdown-menu">
                            <button className="dropdown-item" type="button">Action</button>
                            <button className="dropdown-item disabled" type="button">Another action</button>
                            <button className="dropdown-item" type="button">Something else here</button>
                        </div>
                    </div>
                    <hr/>

                    <h3>Usage</h3>
                  


                </div>
                <div>
                    <hr/>
                    <h2 className="redTextColor">10)Forms</h2>
                        
                    <h3>Form controls</h3>
                    <div className="container">
                        <div className="row">
                            <div className="col-5 offset-1">
                                <form>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleSelect1">Example select</label>
                                        <select className="form-control" id="exampleSelect1">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleSelect2">Example multiple select</label>
                                        <select multiple className="form-control" id="exampleSelect2">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleTextarea">Example textarea</label>
                                        <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputFile">File input</label>
                                        <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"/>
                                        <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
                                    </div>
                                    <fieldset className="form-group">
                                        <legend>Radio buttons</legend>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked/>
                                                Option one is this and that&mdash;be sure to include why it's great
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label">
                                                <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2"/>
                                                Option two can be something else and selecting it will deselect option one
                                            </label>
                                        </div>
                                        <div className="form-check disabled">
                                            <label className="form-check-label">
                                                <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios3" value="option3" disabled/>
                                                Option three is disabled
                                            </label>
                                        </div>
                                    </fieldset>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input"/>
                                        Check me out
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>                    
                    <hr/>

                    <h4>Textual inputs</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col-5 offset-1">
                                <div className="form-group row">
                                    <label for="example-text-input" className="col-2 col-form-label">Text</label>
                                    <div className="col-10">
                                        <input className="form-control" type="text" value="Artisanal kale" id="example-text-input"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="example-search-input" className="col-2 col-form-label">Search</label>
                                    <div className="col-10">
                                        <input className="form-control" type="search" value="How do I shoot web" id="example-search-input"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="example-email-input" className="col-2 col-form-label">Email</label>
                                    <div className="col-10">
                                        <input className="form-control" type="email" value="bootstrap@example.com" id="example-email-input"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="example-url-input" className="col-2 col-form-label">URL</label>
                                    <div className="col-10">
                                        <input className="form-control" type="url" value="https://getbootstrap.com" id="example-url-input"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="example-tel-input" className="col-2 col-form-label">Telephone</label>
                                    <div className="col-10">
                                        <input className="form-control" type="tel" value="1-(555)-555-5555" id="example-tel-input"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="example-password-input" className="col-2 col-form-label">Password</label>
                                    <div className="col-10">
                                        <input className="form-control" type="password" value="hunter2" id="example-password-input"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="example-number-input" className="col-2 col-form-label">Number</label>
                                    <div className="col-10">
                                        <input className="form-control" type="number" value="42" id="example-number-input"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="example-datetime-local-input" className="col-2 col-form-label">Date and time</label>
                                    <div className="col-10">
                                        <input className="form-control" type="datetime-local" value="2011-08-19T13:45:00" id="example-datetime-local-input"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="example-date-input" className="col-2 col-form-label">Date</label>
                                    <div className="col-10">
                                        <input className="form-control" type="date" value="2011-08-19" id="example-date-input"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="example-month-input" className="col-2 col-form-label">Month</label>
                                    <div className="col-10">
                                        <input className="form-control" type="month" value="2011-08" id="example-month-input"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="example-week-input" className="col-2 col-form-label">Week</label>
                                    <div className="col-10">
                                        <input className="form-control" type="week" value="2011-W33" id="example-week-input"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="example-time-input" className="col-2 col-form-label">Time</label>
                                    <div className="col-10">
                                        <input className="form-control" type="time" value="13:45:00" id="example-time-input"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="example-color-input" className="col-2 col-form-label">Color</label>
                                    <div className="col-10">
                                        <input className="form-control" type="color" value="#563d7c" id="example-color-input"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <hr/>
                    
                    <h3>Form layouts</h3>
                    <div className="container">
                        <div className="row">
                            <div className="col-5 offset-1">
                                <form>
                                    <div className="form-group">
                                        <label for="formGroupExampleInput">Example label</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="formGroupExampleInput2">Another label</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <hr/>

                    <h4>Inline forms</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col-10 offset-1">
                                <form className="form-inline">
                                    <label className="sr-only" for="inlineFormInput">Name</label>
                                    <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Jane Doe"/>

                                    <label className="sr-only" for="inlineFormInputGroup">Username</label>
                                    <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                        <div className="input-group-addon">@</div>
                                        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Username"/>
                                    </div>

                                    <div className="form-check mb-2 mr-sm-2 mb-sm-0">
                                        <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox"/> Remember me
                                        </label>
                                    </div>

                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>                    
                    <hr/>

                    <h4>Using the Grid</h4>
                    <div className="container">
                        <form>
                            <div className="form-group row">
                            <label for="lgFormGroupInput" className="col-sm-2 col-form-label col-form-label-lg">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control form-control-lg" id="lgFormGroupInput" placeholder="you@example.com"/>
                            </div>
                            </div>
                            <div className="form-group row">
                            <label for="smFormGroupInput" className="col-sm-2 col-form-label col-form-label-sm">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control form-control-sm" id="smFormGroupInput" placeholder="you@example.com"/>
                            </div>
                            </div>
                        </form>
                    </div> 
                    <hr/>

                    <h3>Checkboxes and radios</h3>

                    <h4>Default (stacked)</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col-5 offset-1">
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox" value=""/>
                                        Option one is this and that&mdash;be sure to include why it's great
                                    </label>
                                </div>
                                <div className="form-check disabled">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox" value="" disabled/>
                                        Option two is disabled
                                    </label>
                                </div>                            
                            </div>
                        </div>
                    </div> 
                    <hr/>

                    <h4>Inline</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col-5 offset-1">
                                <div className="form-check form-check-inline">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/> 1
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/> 2
                                    </label>
                                    </div>
                                <div className="form-check form-check-inline disabled">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled/> 3
                                    </label>
                                </div>                            
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-5 offset-1">
                                <div className="form-check form-check-inline">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/> 1
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/> 2
                                    </label>
                                </div>
                                <div cclassNamelass="form-check form-check-inline disabled">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled/> 3
                                    </label>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <hr/>

                    <h4>Without labels</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col-5 offset-1">
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="..."/>
                                    </label>
                                </div>                            
                            </div>
                        </div>
                    </div> 
                    <hr/>

                    <h3>Static controls</h3>
                    <div className="container">
                        <div className="row">
                            <div className="col-5 offset-1">
                                <form>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Email</label>
                                        <div className="col-sm-10">
                                            <p className="form-control-static">email@example.com</p>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                        <div className="col-sm-10">
                                            <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                                        </div>
                                    </div>
                                </form>                            
                            </div>
                        </div>
                    </div> 
                    <hr/>

                    <h3>Disabled states</h3>
                    <div className="container">
                        <div className="row">
                            <div className="col-5 offset-1">
                                <form>
                                    <fieldset disabled>
                                        <div className="form-group">
                                            <label for="disabledTextInput">Disabled input</label>
                                            <input type="text" id="disabledTextInput" className="form-control" placeholder="Disabled input"/>
                                        </div>
                                        <div className="form-group">
                                            <label for="disabledSelect">Disabled select menu</label>
                                            <select id="disabledSelect" className="form-control">
                                                <option>Disabled select</option>
                                            </select>
                                        </div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox"/> Can't check this
                                            </label>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </fieldset>
                                </form>                            
                            </div>
                        </div>
                    </div> 
                    <hr/>

                    <h3>Readonly inputs</h3>
                    <div className="container">
                        <div className="row">
                            <div className="col-5 offset-1">
                                <input className="form-control" type="text" placeholder="Readonly input here…" readonly/>
                            </div>
                        </div>
                    </div> 
                    <hr/>

                    <h3>Control sizing</h3>
                    <div className="container">
                        <div className="row">
                            <div className="col-5 offset-1">
                                <input className="form-control form-control-lg" type="text" placeholder=".form-control-lg"/>
                                <input className="form-control" type="text" placeholder="Default input"/>
                                <input className="form-control form-control-sm" type="text" placeholder=".form-control-sm"/>                            
                            </div>
                            <div className="col-5">
                                <select className="form-control form-control-lg">
                                    <option>Large select</option>
                                </select>
                                <select className="form-control">
                                    <option>Default select</option>
                                </select>
                                <select className="form-control form-control-sm">
                                    <option>Small select</option>
                                </select>                            
                            </div>
                        </div>
                    </div> 
                    <hr/>

                    <h3>Column sizing</h3>
                    <div className="container">
                        <div className="row">
                            <div className="col-2">
                                <input type="text" className="form-control" placeholder=".col-2"/>
                            </div>
                            <div className="col-3">
                                <input type="text" className="form-control" placeholder=".col-3"/>
                            </div>
                            <div className="col-4">
                                <input type="text" className="form-control" placeholder=".col-4"/>
                            </div>
                        </div>
                    </div> 
                    <hr/>
                    
                    <h3>Help text</h3>
                    <hr/>

                    <h4>Block level</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col-5 offset-1">
                                <label for="inputPassword5">Password</label>
                                <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock"/>
                                <p id="passwordHelpBlock" className="form-text text-muted">
                                    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                                </p>                            
                            </div>
                        </div>
                    </div> 
                    <hr/>

                    <h4>Inline</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col-5 offset-1">
                                <form className="form-inline">
                                    <div className="form-group">
                                        <label for="inputPassword4">Password</label>
                                        <input type="password" id="inputPassword4" className="form-control mx-sm-3" aria-describedby="passwordHelpInline"/>
                                        <small id="passwordHelpInline" className="text-muted">
                                            Must be 8-20 characters long.
                                        </small>
                                    </div>
                                </form>                            
                            </div>
                        </div>
                    </div> 
                    <hr/>

                    <h3>Validation</h3>
                    <div className="container">
                        <div className="row">
                            <div className="col-5 offset-1">
                                <div className="form-group has-success">
                                    <label className="form-control-label" for="inputSuccess1">Input with success</label>
                                    <input type="text" className="form-control form-control-success" id="inputSuccess1"/>
                                    <div className="form-control-feedback">Success! You've done it.</div>
                                    <small className="form-text text-muted">Example help text that remains unchanged.</small>
                                </div>
                                <div className="form-group has-warning">
                                    <label className="form-control-label" for="inputWarning1">Input with warning</label>
                                    <input type="text" className="form-control form-control-warning" id="inputWarning1"/>
                                    <div className="form-control-feedback">Shucks, check the formatting of that and try again.</div>
                                    <small className="form-text text-muted">Example help text that remains unchanged.</small>
                                </div>
                                <div className="form-group has-danger">
                                    <label className="form-control-label" for="inputDanger1">Input with danger</label>
                                    <input type="text" className="form-control form-control-danger" id="inputDanger1"/>
                                    <div className="form-control-feedback">Sorry, that username's taken. Try another?</div>
                                    <small className="form-text text-muted">Example help text that remains unchanged.</small>
                                </div>                            
                            </div>
                            <div className="col-5">
                                <div className="form-check has-success">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" id="checkboxSuccess" value="option1"/>
                                        Checkbox with success
                                    </label>
                                </div>
                                <div className="form-check has-warning">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" id="checkboxWarning" value="option1"/>
                                        Checkbox with warning
                                    </label>
                                </div>
                                <div className="form-check has-danger">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" id="checkboxDanger" value="option1"/>
                                        Checkbox with danger
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <hr/>

                    <h3>Custom forms</h3>
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <label className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input"/>
                                    <span className="custom-control-indicator"></span>
                                    <span className="custom-control-description">Check this custom checkbox</span>
                                </label>
                            </div>
                            <div className="col-4">
                                <label className="custom-control custom-radio">
                                    <input id="radio1" name="radio" type="radio" className="custom-control-input"/>
                                    <span className="custom-control-indicator"></span>
                                    <span className="custom-control-description">Toggle this custom radio</span>
                                </label>
                                <label className="custom-control custom-radio">
                                    <input id="radio2" name="radio" type="radio" className="custom-control-input"/>
                                    <span className="custom-control-indicator"></span>
                                    <span className="custom-control-description">Or toggle this other custom radio</span>
                                </label>
                            </div>
                            <div className="col-4">
                                <label className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" disabled/>
                                    <span className="custom-control-indicator"></span>
                                    <span className="custom-control-description">Check this custom checkbox</span>
                                </label>

                                <label className="custom-control custom-radio">
                                    <input id="radio3" name="radioDisabled" type="radio" className="custom-control-input" disabled/>
                                    <span className="custom-control-indicator"></span>
                                    <span className="custom-control-description">Toggle this custom radio</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <hr/>

                    <h4>File browser</h4>
                    <label className="custom-file">
                        <input type="file" id="file" className="custom-file-input"/>
                        <span className="custom-file-control"></span>
                    </label>
                    <hr/>

                </div>
                <div>
                    <hr/>
                    <h2 className="redTextColor">11)Input group</h2>
                        
                    <h3>Basic example</h3>
                    <div className="container">
                        <div className="row">
                            <div className="col-5 offset-1">
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon1">@</span>
                                    <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1"/>
                                </div>
                                <br/>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Recipient's username" aria-describedby="basic-addon2"/>
                                    <span className="input-group-addon" id="basic-addon2">@example.com</span>
                                </div>
                                <br/>
                                <label for="basic-url">Your vanity URL</label>
                                <div className="input-group">
                                    <span className="input-group-addon" id="basic-addon3">https://example.com/users/</span>
                                    <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                                </div>
                                <br/>
                                <div className="input-group">
                                    <span className="input-group-addon">$</span>
                                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
                                    <span className="input-group-addon">.00</span>
                                </div>
                                <br/>
                                <div className="input-group">
                                    <span className="input-group-addon">$</span>
                                    <span className="input-group-addon">0.00</span>
                                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>

                    <h3>Sizing</h3>
                    <div className="container">
                        <div className="row">
                            <div className="col-5 offset-1">
                                <div className="input-group input-group-lg">
                                    <span className="input-group-addon" id="sizing-addon1">@</span>
                                    <input type="text" className="form-control" placeholder="Username" aria-describedby="sizing-addon1"/>
                                </div>
                                <br/>
                                <div className="input-group">
                                    <span className="input-group-addon" id="sizing-addon2">@</span>
                                    <input type="text" className="form-control" placeholder="Username" aria-describedby="sizing-addon2"/>
                                </div>                            
                            </div>
                        </div>
                    </div>
                    <hr/>

                    <h3>Checkboxes and radio addons</h3>
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <input type="checkbox" aria-label="Checkbox for following text input"/>
                                    </span>
                                    <input type="text" className="form-control" aria-label="Text input with checkbox"/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <input type="radio" aria-label="Radio button for following text input"/>
                                    </span>
                                    <input type="text" className="form-control" aria-label="Text input with radio button"/>
                                </div>
                            </div>
                        </div>                             
                    </div>
                    <hr/>

                    <h3>Multiple addons</h3>
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <input type="checkbox" aria-label="Checkbox for following text input"/>
                                    </span>
                                    <span className="input-group-addon">$</span>
                                    <input type="text" className="form-control" aria-label="Text input with checkbox"/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="input-group">
                                    <span className="input-group-addon">$</span>
                                    <span className="input-group-addon">0.00</span>
                                    <input type="text" className="form-control" aria-label="Text input with radio button"/>
                                </div>
                            </div>
                        </div>                            
                    </div>
                    <hr/>

                    <h3>Button addons</h3>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="input-group">
                                    <span className="input-group-btn">
                                        <button className="btn btn-danger" type="button">Go!</button>
                                    </span>
                                    <input type="text" className="form-control" placeholder="Search for..."/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search for..."/>
                                    <span className="input-group-btn">
                                        <button className="btn btn-info" type="button">Go!</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-lg-offset-3 col-lg-6">
                                <div className="input-group">
                                    <span className="input-group-btn">
                                        <button className="btn btn-danger" type="button">Hate it</button>
                                    </span>
                                    <input type="text" className="form-control" placeholder="Product name"/>
                                    <span className="input-group-btn">
                                        <button className="btn btn-success" type="button">Love it</button>
                                    </span>
                                </div>
                            </div>
                        </div>                            
                    </div>
                    <hr/>

                    <h3>Buttons with dropdowns</h3>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="input-group">
                                    <div className="input-group-btn">
                                        <button type="button" className="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Action
                                        </button>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div role="separator" className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Text input with dropdown button"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="input-group">
                                    <input type="text" className="form-control" aria-label="Text input with dropdown button"/>
                                    <div className="input-group-btn">
                                        <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Action
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div role="separator" className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                            
                    </div>
                    <hr/>

                    <h3>Segmented buttons</h3>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="input-group">
                                    <div className="input-group-btn">
                                        <button type="button" className="btn btn-primary">Action</button>
                                        <button type="button" className="btn btn-info dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div role="separator" className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Text input with segmented button dropdown"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="input-group">
                                    <input type="text" className="form-control" aria-label="Text input with segmented button dropdown"/>
                                    <div className="input-group-btn">
                                        <button type="button" className="btn btn-danger">Action</button>
                                        <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div role="separator" className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                            
                    </div>
                    <hr/>

                </div>
                <div>
                    <hr/>
                    <h2 className="redTextColor">12)Jumbotron</h2>

                    <h3>Standart Jumbotron</h3>
                    <div className="container">
                        <div className="row">
                            <div className="jumbotron">
                                <h1 className="display-3">Hello, world!</h1>
                                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                                <hr className="my-4"/>
                                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                                <p className="lead">
                                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr/>

                    <h3>Fluid Jumbotron</h3>
                    <div className="container">
                        <div className="row">
                            <div className="jumbotron jumbotron-fluid">
                                <div className="container">
                                    <h1 className="display-3">Fluid jumbotron</h1>
                                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>

                </div>
                <div>
                    <hr/>
                    <h2 className="redTextColor">13)List Group</h2>
                    
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <h3>Basic Example</h3>
                                <ul className="list-group">
                                    <li className="list-group-item">Cras justo odio</li>
                                    <li className="list-group-item">Dapibus ac facilisis in</li>
                                    <li className="list-group-item">Morbi leo risus</li>
                                    <li className="list-group-item">Porta ac consectetur ac</li>
                                    <li className="list-group-item">Vestibulum at eros</li>
                                </ul>
                            </div>
                            <div className="col-4">
                                <h3>Active items</h3>
                                <ul className="list-group">
                                    <li className="list-group-item">Cras justo odio</li>
                                    <li className="list-group-item active">Dapibus ac facilisis in</li>
                                    <li className="list-group-item">Morbi leo risus</li>
                                    <li className="list-group-item">Porta ac consectetur ac</li>
                                    <li className="list-group-item">Vestibulum at eros</li>
                                </ul>
                            </div>
                            <div className="col-4">
                                <h3>Disabled items</h3>
                                <ul className="list-group">
                                    <li className="list-group-item">Cras justo odio</li>
                                    <li className="list-group-item">Dapibus ac facilisis in</li>
                                    <li className="list-group-item">Morbi leo risus</li>
                                    <li className="list-group-item disabled">Porta ac consectetur ac</li>
                                    <li className="list-group-item">Vestibulum at eros</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr/>

                    <h3>Links and buttons</h3>
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                                <div className="list-group">
                                    <a href="#" className="list-group-item active">
                                        Cras justo odio
                                    </a>
                                    <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                                    <a href="#" className="list-group-item list-group-item-action">Morbi leo risus</a>
                                    <a href="#" className="list-group-item list-group-item-action">Porta ac consectetur ac</a>
                                    <a href="#" className="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="list-group">
                                    <button type="button" className="list-group-item list-group-item-action active">
                                        Cras justo odio
                                    </button>
                                    <button type="button" className="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
                                    <button type="button" className="list-group-item list-group-item-action">Morbi leo risus</button>
                                    <button type="button" className="list-group-item list-group-item-action">Porta ac consectetur ac</button>
                                    <button type="button" className="list-group-item list-group-item-action" disabled>Vestibulum at eros</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>

                    
                    <div className="container">
                        <div className="row ">
                            <div className="col-6">
                                <div className="row justify-content-center">
                                    <h3>Contextual classes</h3>
                                </div>
                            </div>
                            <div className="col-3">
                                <h3>With badges</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <ul className="list-group">
                                    <li className="list-group-item">Dapibus ac facilisis in</li>
                                    <li className="list-group-item list-group-item-success">Dapibus ac facilisis in</li>
                                    <li className="list-group-item list-group-item-info">Cras sit amet nibh libero</li>
                                    <li className="list-group-item list-group-item-warning">Porta ac consectetur ac</li>
                                    <li className="list-group-item list-group-item-danger">Vestibulum at eros</li>
                                </ul>                                
                            </div>
                            <div className="col-3">
                                <div className="list-group">
                                    <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                                    <a href="#" className="list-group-item list-group-item-action list-group-item-success">Dapibus ac facilisis in</a>
                                    <a href="#" className="list-group-item list-group-item-action list-group-item-info">Cras sit amet nibh libero</a>
                                    <a href="#" className="list-group-item list-group-item-action list-group-item-warning">Porta ac consectetur ac</a>
                                    <a href="#" className="list-group-item list-group-item-action list-group-item-danger">Vestibulum at eros</a>
                                </div>
                            </div>
                            <div className="col-3">
                                <ul className="list-group">
                                    <li className="list-group-item justify-content-between">
                                        Cras justo odio
                                        <span className="badge badge-default badge-pill">14</span>
                                    </li>
                                    <li className="list-group-item justify-content-between">
                                        Dapibus ac facilisis in
                                        <span className="badge badge-default badge-pill">2</span>
                                    </li>
                                    <li className="list-group-item justify-content-between">
                                        Morbi leo risus
                                        <span className="badge badge-default badge-pill">1</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr/>

                    <h3>Custom content</h3>
                    <div className="container">
                        <div className="row">
                            <div className="list-group">
                                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">List group item heading</h5>
                                        <small>3 days ago</small>
                                    </div>
                                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                    <small>Donec id elit non mi porta.</small>
                                </a>
                                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">List group item heading</h5>
                                        <small className="text-muted">3 days ago</small>
                                    </div>
                                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                    <small className="text-muted">Donec id elit non mi porta.</small>
                                </a>
                                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">List group item heading</h5>
                                        <small className="text-muted">3 days ago</small>
                                    </div>
                                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                    <small className="text-muted">Donec id elit non mi porta.</small>
                                </a>
                            </div>                            
                        </div>
                    </div>
                    <hr/>
                </div>
                <div>
                    <hr/>
                    <h2 className="redTextColor">14)Modal</h2>
                    
                    <h3>Static modal example</h3>

                    <div className="modal fade">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <p>Modal body text goes here.</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>

                    <h3>Static modal example</h3>

                    <div className="container">
                        <div className="row">
                            <div className="col-4">

                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <hr/>
                    <h2 className="redTextColor">2)Utilities -> 2)Clearfix</h2>
                    Without .clearfix class:
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-9">
                                <div className="bg-danger">
                                    <button className="btn btn-secondary float-left">Example Button floated left</button>
                                    <button className="btn btn-secondary float-right">Example Button floated right</button>
                                </div> 
                            </div>
                        </div>
                    </div>
                    Within .clearfix class:    
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-9">
                                <div className="bg-success clearfix">
                                    <button className="btn btn-secondary float-left">Example Button floated left</button>
                                    <button className="btn btn-secondary float-right">Example Button floated right</button>
                                </div>        
                            </div>
                        </div>
                    </div>        
                </div>
                <div>
                    <hr/>
                    <h2 className="redTextColor">2)Utilities -> 10)Responsive helpers</h2>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" 
                            src="//www.youtube.com/embed/zpOULjyy-n8?rel=0" 
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>
        );
    }
}

export default BootstrapTest;
