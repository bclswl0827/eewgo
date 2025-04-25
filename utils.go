package eewgo

import (
	"bufio"
	"strings"
)

func stripSourceMap(input string) (string, error) {
	var result strings.Builder
	scanner := bufio.NewScanner(strings.NewReader(input))

	for scanner.Scan() {
		line := scanner.Text()
		if !strings.Contains(line, "//# sourceMappingURL=") {
			result.WriteString(line + "\n")
		}
	}

	if err := scanner.Err(); err != nil {
		return "", err
	}

	return result.String(), nil
}
