# BNBVisualizer

B&B Visualizer for an existing program that generates log files.
Made with tauri (https://tauri.app/)
Dependencies: Rust, Tauri cli
Install with `npm i`
To build typescipt files in case of edit just run `npm run ui-dev` (see in package.json) this will compile each file into the javascript bundle files.
Run local dev server (with live refresh if anything changed/updated in /dist folder) with `npm run localhost` (see in package.json). Tauri dev depends on this live server and will not run until you start it. Note: you can also view this on your browser on the other hand Rust based code (like demo-button on click) won't run.
To run application without building it just run `npm run tauri dev`.
To build a release run `npm run tauri build` more on tauri guide.

Visualizer have very easy to use controls:
Click on a 'closed' node to open it.
Click on an 'opened' node to close it.
Scroll up to zoom in.
Scroll down to zoom out.
Moving with 'drag-and-drop'. (Click on somewhere, move your mouse, release the mouse click.)
Easy as that

References:
Tauri
D3JS by Mike Bostock (and many more collaborators)
D3JS typescript transition written by Tom Wanzek, Alex Ford, Boris Yankov, Robert Moura, and Nathan Bierema
A horizontal tree in javascript example by Nick Portokallidis
Thanks to any mentioned above, this program mostly based on those, couldn't be possible without them.