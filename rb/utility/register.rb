# Geonode SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

GeonodeUtility.registrar = ->(u) {
  u.clean = GeonodeUtilities::Clean
  u.done = GeonodeUtilities::Done
  u.make_error = GeonodeUtilities::MakeError
  u.feature_add = GeonodeUtilities::FeatureAdd
  u.feature_hook = GeonodeUtilities::FeatureHook
  u.feature_init = GeonodeUtilities::FeatureInit
  u.fetcher = GeonodeUtilities::Fetcher
  u.make_fetch_def = GeonodeUtilities::MakeFetchDef
  u.make_context = GeonodeUtilities::MakeContext
  u.make_options = GeonodeUtilities::MakeOptions
  u.make_request = GeonodeUtilities::MakeRequest
  u.make_response = GeonodeUtilities::MakeResponse
  u.make_result = GeonodeUtilities::MakeResult
  u.make_point = GeonodeUtilities::MakePoint
  u.make_spec = GeonodeUtilities::MakeSpec
  u.make_url = GeonodeUtilities::MakeUrl
  u.param = GeonodeUtilities::Param
  u.prepare_auth = GeonodeUtilities::PrepareAuth
  u.prepare_body = GeonodeUtilities::PrepareBody
  u.prepare_headers = GeonodeUtilities::PrepareHeaders
  u.prepare_method = GeonodeUtilities::PrepareMethod
  u.prepare_params = GeonodeUtilities::PrepareParams
  u.prepare_path = GeonodeUtilities::PreparePath
  u.prepare_query = GeonodeUtilities::PrepareQuery
  u.graphql_body = GeonodeUtilities::GraphqlBody
  u.graphql_errors = GeonodeUtilities::GraphqlErrors
  u.result_basic = GeonodeUtilities::ResultBasic
  u.result_body = GeonodeUtilities::ResultBody
  u.result_headers = GeonodeUtilities::ResultHeaders
  u.transform_request = GeonodeUtilities::TransformRequest
  u.transform_response = GeonodeUtilities::TransformResponse
}
