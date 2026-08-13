# Geonode SDK utility: make_context

from projectname_sdk.core.context import GeonodeContext


def make_context_util(ctxmap, basectx):
    return GeonodeContext(ctxmap, basectx)
