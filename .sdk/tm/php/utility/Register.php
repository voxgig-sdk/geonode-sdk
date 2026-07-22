<?php
declare(strict_types=1);

// Geonode SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

GeonodeUtility::setRegistrar(function (GeonodeUtility $u): void {
    $u->clean = [GeonodeClean::class, 'call'];
    $u->done = [GeonodeDone::class, 'call'];
    $u->make_error = [GeonodeMakeError::class, 'call'];
    $u->feature_add = [GeonodeFeatureAdd::class, 'call'];
    $u->feature_hook = [GeonodeFeatureHook::class, 'call'];
    $u->feature_init = [GeonodeFeatureInit::class, 'call'];
    $u->fetcher = [GeonodeFetcher::class, 'call'];
    $u->make_fetch_def = [GeonodeMakeFetchDef::class, 'call'];
    $u->make_context = [GeonodeMakeContext::class, 'call'];
    $u->make_options = [GeonodeMakeOptions::class, 'call'];
    $u->make_request = [GeonodeMakeRequest::class, 'call'];
    $u->make_response = [GeonodeMakeResponse::class, 'call'];
    $u->make_result = [GeonodeMakeResult::class, 'call'];
    $u->make_point = [GeonodeMakePoint::class, 'call'];
    $u->make_spec = [GeonodeMakeSpec::class, 'call'];
    $u->make_url = [GeonodeMakeUrl::class, 'call'];
    $u->param = [GeonodeParam::class, 'call'];
    $u->prepare_auth = [GeonodePrepareAuth::class, 'call'];
    $u->prepare_body = [GeonodePrepareBody::class, 'call'];
    $u->prepare_headers = [GeonodePrepareHeaders::class, 'call'];
    $u->prepare_method = [GeonodePrepareMethod::class, 'call'];
    $u->prepare_params = [GeonodePrepareParams::class, 'call'];
    $u->prepare_path = [GeonodePreparePath::class, 'call'];
    $u->prepare_query = [GeonodePrepareQuery::class, 'call'];
    $u->result_basic = [GeonodeResultBasic::class, 'call'];
    $u->result_body = [GeonodeResultBody::class, 'call'];
    $u->result_headers = [GeonodeResultHeaders::class, 'call'];
    $u->transform_request = [GeonodeTransformRequest::class, 'call'];
    $u->transform_response = [GeonodeTransformResponse::class, 'call'];
});
