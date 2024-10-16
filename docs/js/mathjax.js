window.MathJax = {
    tex: {
        inlineMath: [["\\(", "\\)"]],
        displayMath: [["\\[", "\\]"]],
        processEscapes: true,
        processEnvironments: true,
        macros: {
            "floor": ["\\mathop{\\rm floor}\\nolimits"],
            "ceil": ["\\mathop{\\rm ceil}\\nolimits"],
            "myfrac": ["\\mathop{\\rm frac}\\nolimits"]
        }
    },
    options: {
        ignoreHtmlClass: ".*|",
        processHtmlClass: "arithmatex"
    },
};

document$.subscribe(() => {
    MathJax.startup.output.clearCache()
    MathJax.typesetClear()
    MathJax.texReset()
    MathJax.typesetPromise()
})