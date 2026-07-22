package core

type GeonodeError struct {
	IsGeonodeError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewGeonodeError(code string, msg string, ctx *Context) *GeonodeError {
	return &GeonodeError{
		IsGeonodeError: true,
		Sdk:              "Geonode",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *GeonodeError) Error() string {
	return e.Msg
}
