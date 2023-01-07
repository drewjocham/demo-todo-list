package config

import (
	"github.com/kelseyhightower/envconfig"
)

type ServerConfig struct {
	HTTPPort      int    `envconfig:"HTTP_PORT" default:"8081"`
	GRPCPort      int    `envconfig:"GRPC_PORT" default:"8082"`
	ServerAddress string `envconfig:"SERVER_ADDRESS" default:"localhost:8082"`
}

type MongoConfig struct {
	Uri      string `envconfig:"DB_URI" default:"mongodb+srv://drew:PassWord1234@cluster0.mqj7m.mongodb.net/?retryWrites=true&w=majority"`
	Password string `envconfig:"DB_PASSWORD" default:"GRad.2004."`
	Username string `envconfig:"DB_USER" default:"drew"`
}

type Config struct {
	Server      ServerConfig
	MongoConfig MongoConfig
}

func NewConfig() (*Config, error) {
	var c Config

	err := envconfig.Process("", &c)

	if err != nil {
		return nil, err
	}

	return &c, nil
}
