"""
This is a :mod:`package.module1.module2` documentation example.
"""


def example(argument1: int, argument2: float) -> None:
    """The function documentation example.

    :param argument1: The first arguement.
    :param argument2: The second arguement.

    :return: None
    """


class Example:
    """
    The class documentation example.
    """

    def __init__(self, argument1, *args, **kwargs) -> None:
        self.argument1 = argument1
        self.arguments = args
        self.kwarguments = kwargs

    def example(self) -> None:
        """
        The method documentation example.
        """
