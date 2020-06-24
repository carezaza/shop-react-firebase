export const notAllowRender = () => {
    const notAllowRenderPaths = ['/signin', '/signup'];
    return notAllowRenderPaths.find(p =>  p === window.location.pathname.toLowerCase()) ? true : false;
}