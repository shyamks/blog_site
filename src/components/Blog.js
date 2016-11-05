import React, {Component} from 'react';
import {Sticky} from 'react-sticky';
import Header from './Header/Header';
import './Blog.css'
class Blog extends Component {
    render() {
        console.log(this.props.params.blogId);
        return (
            <div>
                <Header />
                <div className="blog-container">
                    <section className="blog-left">
                            Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                            Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                            Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                            Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                            Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                            Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                    </section>
                    <section className="blog-middle">
                        <header className="blog-middle-header"> Blog No {this.props.params.blogId}</header>
                            <div className="blog-middle-box" >
                                <p>
                                    Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                                Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                                Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                                <pre><code>Blog is here !!Blog is here !!Blog is here !!</code></pre>Blog is here !!Blog is here !!Blog is here !!
                                Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                                Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                                Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                                Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                                Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                                Blog is here !!Blog is here !!Blog is here !!
                                </p><p>
                                Blog is here !!Blog is here !!Blog is here !!
                                Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                                Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                                Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                                Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                                Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                                Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                                Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                                Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                                Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                                Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                                Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                                Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                                Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                                Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                            </p>
                            </div>
                    </section>
                    <section className="blog-right">
                        <header className="blog-middle-header"> First blog</header>
                            Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                            Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                            Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                            Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                            Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                            Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                            Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                            Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                            Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                    </section>
                    <footer className="blog-footer">
                        Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                        Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                        Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                        Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                        Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                        Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!Blog is here !!
                    </footer>
                </div>
            </div>
        );
    }
}

export default Blog;
