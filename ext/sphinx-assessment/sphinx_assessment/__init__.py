from docutils import nodes
from docutils.parsers.rst import directives, Directive

from sphinx.util import logging
from sphinx.util.docutils import SphinxDirective

from .mchoice import setup as mchoice_setup
from .dragndrop import setup as dragndrop_setup
from .fitb import setup as fitb_setup
from .parsons import setup as parsons_setup

logger = logging.getLogger(__name__)


def init_numfig(app, config):
    """Initialize numfig"""

    config["numfig"] = True
    numfig_format = {"assessment": "Toetsvraag %s"}
    # Merge with current sphinx settings
    numfig_format.update(config.numfig_format)
    config.numfig_format = numfig_format


def setup(app):

    app.connect("config-inited", init_numfig)  # event order - 1

    mchoice_setup(app)
    dragndrop_setup(app)
    fitb_setup(app)
    parsons_setup(app)

    return {
        "version": "0.1",
        "parallel_read_safe": True,
        "parallel_write_safe": True,
    }
