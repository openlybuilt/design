import { Component, type ReactNode } from 'react';
export class PreviewBoundary extends Component<{children:ReactNode},{failed:boolean}> {
 state={failed:false};
 static getDerivedStateFromError(){return {failed:true};}
 render(){return this.state.failed?<p className="preview-error" role="status">Preview unavailable.</p>:this.props.children;}
}
